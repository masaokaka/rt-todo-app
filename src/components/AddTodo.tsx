import React, { useState } from "react";
import { Todo } from "../Types";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo = ({ todoList, setTodoList }: Props) => {
  const [todo, setTodo] = useState("");

  //inputのvalueを関数処理の中で受け取りたい場合
  // const doSetTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodo(e.target.value);
  // };

  //Id用にランダムな文字列を生成
  const createRandomId = (): string => {
    return Math.random().toString(32).substring(2);
  };

  //Todoを追加する(button)
  const submit = () => {
    const newTodo: Todo = {
      id: createRandomId(),
      title: todo,
      done: false,
    };
    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={submit}>追加</button>
    </div>
  );
};

export default AddTodo;
