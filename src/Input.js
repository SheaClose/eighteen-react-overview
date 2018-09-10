import React from "react";

function Input(props) {
  return (
    <input
      value={props.userInput}
      onChange={props.changeHandler}
      placeholder="New Cat"
    />
  );
}

export default Input;
