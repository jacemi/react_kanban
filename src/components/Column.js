import React from 'react';
import Card from '../containers/Card';

const Column = ({ cards, status} ) => {
  return cards.filter(card => {
    return(
      card.status_id === status
    )
  })
  .map(card => {
    console.log('column card', card);
    return(
      <div className='column'>
      <Card key={card.id} card={card} />
      </div>
    )
  })
}

export default Column;