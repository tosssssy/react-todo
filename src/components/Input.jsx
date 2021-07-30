import React from "react";
import "./";

export const App = () => {
  const add_todo = () => {
    console.log("sfdjsh");
  };

  const delete_todo = () => {
    console.log("delete!");
  };

  return (
    <>
      <div id="input_container">
        <input type="text" placeholder="TODOを入力" />
        <button onClick={add_todo}>追加</button>
      </div>
      <div id="todo_container">
        <p>TODOリスト</p>
        <ul>
          <li>
            <div>
              <p>sdfj</p>
              <button onClick={delete_todo}>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p>sdfj</p>
              <button onClick={delete_todo}>削除</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
