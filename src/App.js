import { useEffect, useState } from "react";
import Header from "./components/header";
import { HeaderSection, Section } from "./components/section";
import Container from "./components/container";
import ContactForm from "./components/form";
import Filter from "./components/filter";
import ContactList from "./components/contactList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const newName = getNormalizeText(contact.name);
    if (
      contacts.some((contact) => getNormalizeText(contact.name) === newName)
    ) {
      toast.error(`${contact.name} is already in contacts`, {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        theme: "colored",
      });
      return;
    }
    setContacts((prev) => [...prev, contact]);
  };

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  const resetFilter = () => {
    setFilter("");
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      getNormalizeText(name).includes(getNormalizeText(filter))
    );
  };

  const getNormalizeText = (text) => text.toLowerCase();

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      <Header>
        <HeaderSection />
      </Header>
      <main>
        <section>
          <Container>
            <Section title="Add new contact">
              <ContactForm onSubmit={addContact} onClick={resetFilter} />
            </Section>
            <Section title="Contacts">
              {contacts.length ? (
                <>
                  <Filter
                    onChange={handleInputChange}
                    text={filter}
                    onClick={resetFilter}
                  />
                  {filteredContacts.length ? (
                    <ContactList
                      contacts={filteredContacts}
                      onSubmit={deleteContact}
                    />
                  ) : (
                    <p>
                      No contacts by name {filter.toUpperCase()} in PhoneBook
                    </p>
                  )}
                </>
              ) : (
                <p>No contacts in PhoneBook</p>
              )}
            </Section>
          </Container>
        </section>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
