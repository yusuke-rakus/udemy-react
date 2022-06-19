import React, { useState } from "react";
import todo from "./components/todo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // ToDoの追加ボタン押下処理
  const addIncompleteButton = () => {
    // 未完了のToDoに入れる
    if (todoText === "") {
      return;
    }
    const incompleteList = [...incompleteTodos, todoText];
    setIncompleteTodos(incompleteList);

    //テキストボックスを空にする
    setTodoText("");
  };

  // 完了ボタン押下処理
  const completeButton = (i) => {
    //完了へ移動処理
    const completeList = [...completeTodos, incompleteTodos[i]];
    console.log(completeList);
    setCompleteTodos(completeList);

    // 削除処理
    deleteButton(i);
  };

  // 削除ボタン押下処理
  const deleteButton = (i) => {
    const incompleteList = [...incompleteTodos];
    incompleteList.splice(i, 1);
    setIncompleteTodos(incompleteList);
  };

  // 戻すボタン押下処理
  const backButton = (i) => {
    // 完了のToDoから削除する処理
    const completeList = [...completeTodos];
    completeList.splice(i, 1);
    setCompleteTodos(completeList);

    // 未完了のToDoに追加する処理
    const incompleteList = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(incompleteList);
  };

  return (
    <>
      <div id="addArea">
        <input type="text" value={todoText} onChange={onChangeTodoText} />
        <button onClick={addIncompleteButton}>追加</button>
      </div>
      <hr />
      <div id="todoArea">
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
      </div>
      <hr />
      <div id="doneArea">
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
      </div>
    </>
  );
};
export default App;
