import React, { useState } from "react";
import { InputArea } from "../components/InputArea";
import { TodoList } from "../components/TodoList";

export const App = () => {
  const [todoList, setTodoList] = useState([]);

  const add_todo = () => {
    const add_text = document.getElementById("input_area").value;
    if (add_text !== "" && !todoList.includes(add_text)) {
      document.getElementById("input_area").value = "";
      setTodoList(todoList.concat(add_text));
    }
  };

  const delete_todo = (key) => {
    const new_list = todoList.filter((text) => {
      return text !== key;
    });
    setTodoList(new_list);
  };

  return (
    <>
      <InputArea onClick={add_todo} />

      <TodoList todoList={todoList} onClick={delete_todo} />
    </>
  );
};
