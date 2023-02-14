import React from "react";

function ToDoList(props) {
  return (
    <>
      <div className="todo_item">
        <i
          className="fa-solid fa-xmark x-mark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
}

export default ToDoList;
