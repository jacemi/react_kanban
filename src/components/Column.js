import React from 'react';
import Card from '../containers/Card';

//refactor to only take the params the card needs

const Column = ({ cards, status_id, statusName, order }) => {
  return (
    <div className="column">
      <div>{statusName}</div>
      {
        cards.filter(card => {
          return (
            card.status_id === status_id
          )
        })
          .map(card => {
            return (
              <Card key={card.id} card={card} order={order} />
            )
          })
      }
    </div>
  )
};

export default Column;