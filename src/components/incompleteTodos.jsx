import React from "react";

const IncompleteTodos = (props) => {
  const { incompleteTodos, completeButton, deleteButton } = props;
  return (
    <>
      <p>未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => completeButton(index)}>完了</button>
              <button onClick={() => deleteButton(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default IncompleteTodos;
