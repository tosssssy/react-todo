import React from "react";

export const Item = (props) => {
  const { text, delete_todo } = props;
  return (
    <div className="list_item">
      <p>{text}</p>
      <button className="button" onClick={delete_todo}>
        削除
      </button>
    </div>
  );
};
