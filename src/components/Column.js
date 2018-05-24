import React from 'react';
import Card from './Card';

const Column = ({ cards, status} ) => (

  cards.filter(card => {
    return(
      card.status_id === status
    )
  })
  .map(card => {

    return(
      <div className="Column">
      <h1>{card.assignedStatus.name}</h1>
      <Card key={card.id} title={card.title} assignedPriority={card.assignedPriority.name} assignee={card.assignee.name} creator={card.creator.name} />
      </div>
    )
  })
)

export default Column;