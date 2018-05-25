import React, { Component } from 'react';



class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: props.card.title,
      creator: props.card.creator,
      assignee: props.card.assignee,
      assignedPriority: props.card.assignedPriority,
      assignedStatus: props.card.assignedStatus
    }
  }


  componentDidMount() {
 
  }


  render() {
 
    return(
      <div className="Card"> 
      <h3>Task: {this.state.title}</h3>
      <p>Priority level: {this.state.assignedPriority}</p>
      <p>Assigned to: {this.state.assignee}</p>
      <p>Created by: {this.state.creator}</p>
    </div>
    );

  }




}
// const Card = ({ title, assignedPriority, assignee, creator }) => (
//   <div className="Card"> 
//   <h3>Task: {title}</h3>
//   <p>Priority level: {assignedPriority}</p>
//   <p>Assigned to: {assignee}</p>
//   <p>Created by: {creator}</p>
// </div>
// );


export default Card;