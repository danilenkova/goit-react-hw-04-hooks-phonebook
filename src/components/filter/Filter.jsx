import React from "react";
import PropTypes from "prop-types";
import {
  StyledFilter,
  FilterLabel,
  FilterField,
  FilterInput,
} from "./Filter.styled";
import Reset from "../resetbutton";

const Filter = ({ text, onChange, onClick }) => {
  return (
    <StyledFilter>
      <FilterLabel>
        <FilterField>Find contacts by name</FilterField>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          value={text}
          placeholder="Enter name"
          autoComplete="off"
        />
      </FilterLabel>
      {text && <Reset onClick={onClick} />}
    </StyledFilter>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
