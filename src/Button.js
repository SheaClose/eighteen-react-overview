/**
 *
 * 1. make button functional component
 * 2. take addCartToList as a prop and invoke on
 *     a button click
 * 3. Render button in parent element.
 */
import React from "react";

function Button(props) {
  return <button onClick={props.handleClick}>Submit</button>;
}
export default Button;
