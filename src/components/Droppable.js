import React from "react";

export default function Droppable(props) {
  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      onDrop={props.onDrop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
