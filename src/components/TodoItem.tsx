import React from "react";
import { Todo } from "../Types";

interface Props {
  todoItem: Todo;
  doneTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

const TodoItem = ({ todoItem, doneTodo, deleteTodo }: Props) => {
  return (
    <li style={{ listStyle: "none" }}>
      <label>
        <input type="checkbox" onChange={() => doneTodo(todoItem)} />
        {todoItem.done ? (
          <del>{todoItem.title}</del>
        ) : (
          <span>{todoItem.title}</span>
        )}
      </label>
      <button onClick={() => deleteTodo(todoItem)}>削除</button>
    </li>
  );
};

export default TodoItem;
