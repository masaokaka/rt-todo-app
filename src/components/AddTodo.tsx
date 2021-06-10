import React, { useState } from "react";
import { Todo } from "../Types";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo = ({ todoList, setTodoList }: Props) => {
  const [todo, setTodo] = useState("");

  //解説用
  // const doSetTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodo(e.target.value);
  // };

  //Id用にランダムな文字列を生成
  const createRandomId = (): string => {
    return Math.random().toString(32).substring(2);
  };

  const submit = () => {
    const newTodo: Todo = {
      id: createRandomId(),
      title: todo,
      done: false,
    };
    //Todoをローカルストレージに保存
    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
    setTodoList([...todoList, newTodo]);
    //Inputタグのvalueを空文字にする
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
