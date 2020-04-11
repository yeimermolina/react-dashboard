import React from "react";
import { Resizable } from "re-resizable";
import Droppable from "../UI/Droppable";
import "./Column.css";

export default function Column(props) {
  return (
    <Resizable className="column">
      <div className="column__title">{props.title}</div>
      <Droppable
        id={props.id}
        className="column__droppable-area"
        onDrop={props.onDrop}
      >
        {props.children}
      </Droppable>
    </Resizable>
  );
}
