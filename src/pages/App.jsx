import React, { useState } from "react";
import { Item } from "../components/Item";
import "../styles/style.css";

export const App = () => {
  const [todoList, setTodoList] = useState([]);

  const add_todo = () => {
    const add_text = document.getElementById("input_area").value;
    document.getElementById("input_area").value = "";
    setTodoList(todoList.push(add_text));
  };

  const delete_todo = () => {
    // setTodoList(todoList.)
  };

  return (
    <>
      <div className="input_container">
        <input id="input_area" type="text" placeholder="TODOを入力" />
        <button id="input_area" className="button" onClick={add_todo}>
          追加
        </button>
      </div>
      <div className="todo_container">
        <p className="title">TODOリスト</p>
        <ul>
          {todoList.map((todoText) => {
            return (
              <li>
                <Item text={todoText} delete_todo={delete_todo} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
