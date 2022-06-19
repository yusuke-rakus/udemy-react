import React from "react";

const todo = (props) => {
  const [todoText, setTodoText] = props;

  return (
    <>
      <li>{todoText}</li>
    </>
  );
};
export default todo;
