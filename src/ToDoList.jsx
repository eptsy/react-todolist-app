import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import ListComp from "./ListComp";
import { List } from "@mui/material";

function ToDoList() {
  const [item, setItem] = useState("");
  const [newItem, SetNewItem] = useState([]);
  function itemEvnt(e) {
    setItem(e.target.value);
  }
  function addItem() {
    SetNewItem((old) => {
      return [...old, item];
    });
    setItem(" ");
  }
  return (
    <>
      <div>
        <div className="box_list">
          <h1 className="title">React ToDoList App</h1>
          <div className="box">
            <input
              type="text"
              value={item}
              placeholder="Add an Item"
              onChange={itemEvnt}
            />
            <Button variant="contained" color="success" onClick={addItem}>
              <AddIcon />
            </Button>
          </div>
          <ol>
            <Divider />

            {newItem.map((val, index) => {
              return <ListComp key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
