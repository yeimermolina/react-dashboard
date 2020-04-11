import React from "react";
import Draggable from "../UI/Draggable";
import "./ColumnCard.css";

export default function ColumnCard(props) {
  return (
    <Draggable
      id={props.id}
      className="column-card"
      draggable
      onDragStart={props.onDragStart}
    >
      <input
        onChange={props.onChangeCardTitle}
        value={props.title}
        className="column-card__title"
      />
      <p>{props.description}</p>
    </Draggable>
  );
}
