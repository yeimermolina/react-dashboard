import React from "react";

export default function Draggable(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    // setTimeout(() => {
    //   target.style.opacity = 0.5;
    // }, 0);
  };

  const dragOver = e => {
    // tHIS Avoid to drop the item on a draggable item
    // e.stopPropagation();
  };

  const onDragEnd = e => {
    e.target.style.opacity = 1;
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={props.onDragStart}
      onDragOver={dragOver}
      onDragEnd={onDragEnd}
    >
      {props.children}
    </div>
  );
}
