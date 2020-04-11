import React, { useState } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";

export default function CreateCardModal(props) {
  const [storyForm, setStoryForm] = useState({});

  const onInputChange = e => {
    const { name, value } = e.target;
    setStoryForm({
      ...storyForm,
      [name]: value
    });
  };

  return (
    <Modal header="New Story" show={props.show} onClick={props.onClick}>
      <Input
        label="Name"
        name="name"
        value={storyForm.name}
        onChange={onInputChange}
      />
      <Input
        label="Name"
        name="description"
        value={storyForm.description}
        onChange={onInputChange}
      />
      <Input
        label="Name"
        name="name"
        value={storyForm.name}
        onChange={onInputChange}
        error="hola"
      />
    </Modal>
  );
}
