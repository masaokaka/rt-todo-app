import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Todo } from "./Types";
import "./App.css";

//初期値：Todo型配列
let initialState: Todo[] = [];

const App: React.FC = () => {
  const [todoList, setTodoList] = useState(initialState); //可能な限り初期値を与える(型推論されるため)

  useEffect(() => {
    const todo: string | null = localStorage.getItem("todos"); //ローカルストレージからとってくるデータはstringないしはnullのため
    if (todo !== null) {
      console.log("入ってます");
      setTodoList(JSON.parse(todo));
    } else {
      console.log("nullです"); //null確認のため
    }
    //アンマウント時に実行
    return () => {
      setTodoList([]);
    };
  }, []);
  return (
    <div className="App">
      <h2>Todoリスト(TypeScript+React)</h2>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
