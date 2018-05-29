import React from 'react';
import Card from '../containers/Card';

const Column = ({ cards, status} ) => {
  return (
    <div className="column">
    {cards.filter(card => {
    return(
      card.status_id === status
    )
  })
  .map(card => {
    console.log('column card', card);
    return(
      <Card key={card.id} card={card} />
    )
  })}
  </div>
)
}

export default Column;