import React from 'react';
import Card from './Card';

const Column = ({ cards, status} ) => {
 console.log(cards);
  return cards.filter(card => {
    return(
      card.status_id === status
    )
  })
  .map(card => {
    console.log('column card', card);
    return(
  
      <Card key={card.id} card={card} />
      
    )
  })
}

export default Column;