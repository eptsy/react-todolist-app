import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  function itemEvent(e) {
    setInputList(e.target.value);
  }
  function add() {
    setItems((prev) => {
      return [...prev, inputList];
    });
    setInputList("");
  }
  function remove(id) {
    setItems((prev) => {
      return prev.filter((arrE, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="main">
        <h1 className="header">To Do List</h1>
        <input
          type="text"
          placeholder="Add a item:"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={add}>+</button>

        <ol>
          {items.map((itemVal, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={remove}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
