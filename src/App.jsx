import React, { useState } from "react";
import AddArea from "./components/addArea";
import IncompleteTodos from "./components/incompleteTodos";
import CompleteTodos from "./components/completeTodos";

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
    // 完了のToDoから削除するp処理
    const completeList = [...completeTodos];
    completeList.splice(i, 1);
    setCompleteTodos(completeList);

    // 未完了のToDoに追加する処理
    const incompleteList = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(incompleteList);
  };

  // ここからJSX
  return (
    <>
      {/* 入力エリア */}
      <AddArea
        // 関数と値を渡せる(スコープの関係上、関数の定義は上位階層でする必要あり)
        todoText={todoText}
        onChange={onChangeTodoText}
        addIncomplete={addIncompleteButton}
      />
      <hr />

      {/* 未完了エリア */}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        completeButton={completeButton}
        deleteButton={deleteButton}
      />

      <hr />
      {/* 完了エリア */}
      <CompleteTodos completeTodos={completeTodos} backButton={backButton} />
    </>
  );
};
export default App;
