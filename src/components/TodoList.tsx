import React from "react";
import { Todo } from "../Types";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todoList, setTodoList }:Props) => {
  
  //Todoの完了、未完了を切り替える(checkBox)
  const doneTodo = (todo: Todo):void => {
    const newTodoList = todoList.map((td) =>
      td.id === todo.id ? { ...todo, done: !todo.done } : td
    );
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  //Todoを削除する(button)
  const deleteTodo = (todo: Todo):void => {
    const newTodoList = todoList.filter((td) => td.id !== todo.id);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  return (
    <div>
      {todoList.length <= 0 ? (
        "登録されたTodoはありません。"
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todoItem={todo}
              doneTodo={doneTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
