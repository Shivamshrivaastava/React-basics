/* eslint-disable */
import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return <button onClick={props.callApi}>Click to Generate a Joke</button>;
};

Button.propTypes = {
  callApi: PropTypes.func.isRequired,
};

Button.defaultProps = {
  callApi: () => console.log("No API call function provided"),
};

export default Button;