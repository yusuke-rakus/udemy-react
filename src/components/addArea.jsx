import React from "react";

const Add = (props) => {
  const { todoText, onChange, addIncomplete } = props;

  return (
    <>
      <input type="text" value={todoText} onChange={onChange} />
      <button onClick={addIncomplete}>追加</button>
    </>
  );
};
export default Add;
