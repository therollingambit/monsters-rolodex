import React from "react";
import "./card-list.styles.css";
//Components
import Card from '../card/Card';

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
