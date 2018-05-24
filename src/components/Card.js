import React from 'react';


const Card = ({ title, assignedPriority, assignee, creator }) => (
  <div className="Card"> 
  <h3>Task: {title}</h3>
  <p>Priority level: {assignedPriority}</p>
  <p>Assigned to: {assignee}</p>
  <p>Created by: {creator}</p>
</div>
);


export default Card;