import React from "react";
import PropTypes from "prop-types";
import { ResetButton } from "./resetButton.styled";
import { VscChromeClose } from "react-icons/vsc";

const Reset = ({ onClick }) => {
  return (
    <ResetButton type="reset" onClick={onClick}>
      <VscChromeClose />
    </ResetButton>
  );
};

Reset.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Reset;
