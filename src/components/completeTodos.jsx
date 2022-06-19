import React from "react";

const CompleteTodos = (props) => {
  const { completeTodos, backButton } = props;
  return (
    <>
      <p>完了のToDo</p>
      <ul>
        {completeTodos.map((done, index) => {
          return (
            <li key={done}>
              <p>{done}</p>
              <button onClick={() => backButton(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CompleteTodos;
