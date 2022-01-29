import { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import {
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
  FormButton,
} from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    getContact(name, number);
    setName("");
    setNumber("");
  };

  const getContact = (name, number) => {
    const newContact = { id: shortid.generate(), name, number };
    onSubmit(newContact);
  };

  return (
    <StyledForm onSubmit={handelSubmit}>
      <FormLabel>
        <FormField>Name</FormField>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
          required
        />
      </FormLabel>
      <FormLabel>
        <FormField>Number</FormField>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          autoComplete="off"
          onChange={handleInputChange}
          value={number}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
