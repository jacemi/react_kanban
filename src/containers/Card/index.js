import React, { Component } from 'react';
import { connect } from 'react-redux';


class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: '',
      creator: '',
      assignee: '',
      assignedPriority: '',
      assignedStatus: ''
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

const mapStateToProps = state => {
  return {
    cards: state.cards,
    users: state.users,
    statuses: state.statuses,
    priorities: state.priorities
  }
}





export default connect(mapStateToProps, null)(Card);