import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";

function ListComp(props) {
  const [line, setLine] = useState(false);
  function cut_it() {
    setLine(true);
  }
  return (
    <>
      <div className="todo_style">
        <span className="delete" onClick={cut_it}>
          <DeleteIcon />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
      <Divider />
    </>
  );
}

export default ListComp;
