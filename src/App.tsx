import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Todo } from "./Types";
import "./App.css";

//初期値：Todo型配列
let initialState: Todo[] = [];

const App = () => {
  //可能な限り初期値を与える(型推論されるため)
  const [todoList, setTodoList] = useState(initialState);
  //マウント時にのみ以下を実行
  useEffect(() => {
    const todos: string | null = localStorage.getItem("todos");
    //ローカルストレージからとってくるデータ入って居た場合はステートに値をセット
    if (todos !== null) {
      setTodoList(JSON.parse(todos));
    }
    //アンマウント時に実行
    return () => {
      setTodoList([]);
    };
  }, []);

  //画面の表示
  return (
    <div className="App">
      <h2>Todoリスト(TypeScript+React)</h2>
      {/* todolistの表示 */}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {/* テキストボックスと追加ボタンの表示 */}
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
