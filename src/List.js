/**
 * 1. receive list from parent
 * 2. map list to render each element
 * 3. render child in parent.
 */
import React from "react";
//import './.css';

const List = props => {
  let list = props.list.map((cat, i) => {
    return <div key={i}>{cat}</div>;
  });
  return <div className="">{list}</div>;
};
export default List;
