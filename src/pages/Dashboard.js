import React, { useState } from "react";
import Column from "../components/Dashboard/Column";
import ColumnCard from "../components/Dashboard/ColumnCard";
import "./Dashboard.css";
import Button from "../components/UI/Button";
import CreateCardModal from "../components/Dashboard/CreateCardModal";

const CARDS = [
  {
    columnId: "inprogress",
    id: "1",
    title: "Fix Header",
    description: "Hey"
  },
  {
    columnId: "qaprogress",
    id: "2",
    title: "Fix Typo",
    description: "Eliminar "
  },
  {
    columnId: "done",
    id: "3",
    title: "Event Creation",
    description: "Creacion de eventos "
  },
  {
    columnId: "done",
    id: "4",
    title: "Event Creation",
    description: "Creacion de eventos "
  }
];

export default function Dashboard() {
  const [cards, setCards] = useState(CARDS);
  const [cols, setCols] = useState({
    inprogress: [],
    qaprogress: [],
    done: []
  });
  const [showNewCardModal, setShowNewCardModal] = useState(false);

  const onDrop = (e, nextCardColumn) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("card_id");
    let changedCards = cards.filter(card => {
      if (card.id === cardId) {
        card.columnId = nextCardColumn;
      }
      return card;
    });
    setCards(changedCards);
  };

  const onDragStart = e => {
    e.dataTransfer.setData("card_id", e.target.id);
    e.target.style.opacity = 0.5;
  };

  const onChangeCardTitle = (e, cardId) => {
    const oldCards = [...cards];
    const currentCard = oldCards.find(c => c.id === cardId);
    currentCard.title = e.target.value;

    setCards(oldCards);
  };

  const handleNewColumn = () => {
    setCols({
      ...cols,
      test: []
    });
  };

  const toggleNewCardModal = () => {
    setShowNewCardModal(!showNewCardModal);
  };

  const columns = {};

  for (let key of Object.keys(cols)) {
    columns[key] = cards.filter(t => t.columnId === key);
  }

  return (
    <React.Fragment>
      <CreateCardModal
        show={showNewCardModal}
        onClick={() => setShowNewCardModal(false)}
      />
      <div className="dashboard-controls">
        <Button onClick={toggleNewCardModal}>New Card</Button>
        <Button onClick={handleNewColumn}>New Column</Button>
      </div>
      <div className="dashboard-columns">
        {Object.entries(columns).map(column => {
          const [columnId, cards] = column;
          return (
            <Column
              id={columnId}
              key={columnId}
              title={columnId}
              onDrop={e => onDrop(e, columnId)}
            >
              {cards.map(card => {
                return (
                  <ColumnCard
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    onDragStart={onDragStart}
                    onChangeCardTitle={e => onChangeCardTitle(e, card.id)}
                  />
                );
              })}
            </Column>
          );
        })}
      </div>
    </React.Fragment>
  );
}
