import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard, removeCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Option from '../../components/Option';


class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      // creator: this.props.card.creator.name,
      creator_id: this.props.card.creator_id,
      // assignee: this.props.card.assignee.name,
      assignee_id: this.props.card.assignee_id,
      // assignedStatus: this.props.card.assignedStatus.name,
      status_id: this.props.card.status_id,
      // assignedPriority: this.props.card.assignedPriority.name,
      priority_id: this.props.card.priority_id
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.creatorChangeHandler = this.creatorChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);
    this.assignedPriorityChangeHandler = this.assignedPriorityChangeHandler.bind(this);
    this.assignedStatusChangeHandler = this.assignedStatusChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.focusTextInput = this.focusTextInput.bind(this); 
    this.moveStatusLeft = this.moveStatusLeft.bind(this);
    this.moveStatusRight = this.moveStatusRight.bind(this);
    this.handleDelete = this.handleDelete.bind(this); 
  }

  componentDidMount() {
    this.props.loadUsers();
    this.props.loadStatuses();
    this.props.loadPriorities();
  }

  // focusTextInput() {
  //   this.textInput.focus()
  // }

  titleChangeHandler(event) {
    const { value } = event.target;
    console.log('submitted title value', value);
    this.setState({ title: value});
  }

  creatorChangeHandler(event) {
    const { value } = event.target;
    this.setState({ creator_id: value});
  }

  assigneeChangeHandler(event) {
    const { value } = event.target;
    this.setState({ assignee_id: value});
  }

  assignedPriorityChangeHandler(event) {
    const { value } = event.target;
    this.setState({ priority_id: value});
  }

  assignedStatusChangeHandler(event) {
    const { value } = event.target;
    this.setState({ status_id: value});
  }

  moveStatusLeft(event) {
    event.preventDefault();
    console.log('before change', this.state);
    if(this.state.status_id > 0){
      var copyState = Object.assign({}, this.state);
      copyState.status_id -= 1;
      this.setState({ status_id: copyState.status_id});
      console.log('after change', this.state);
      this.props.editCard({...this.state});
    }
  }

  moveStatusRight(event) {
    event.preventDefault();
    console.log('before change', this.state);
    if(this.state.status_id < 3){
      var copyState = Object.assign({}, this.state);
      copyState.status_id += 1;
      this.setState({ status_id: copyState.status_id});
      console.log('after change', this.state);
      this.props.editCard({...this.state});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.title);
    this.props.editCard({...this.state})
    // this.focusTextInput();
    // return this.props.submitHandler(Object.assign({}, this.state))
    // .then(() => {
    //   this.setState({ title: '', creator: '', assignee: '', assignedPriority: '', assignedStatus: '' });
    //   console.log('hello'); 
    // })
    console.log(this.props.statuses);
  }

  handleDelete(event) {
    event.preventDefault();
    console.log(event.target.title);
    this.props.removeCard({...this.state})
    // this.focusTextInput();
    // return this.props.submitHandler(Object.assign({}, this.state))
    // .then(() => {
    //   this.setState({ title: '', creator: '', assignee: '', assignedPriority: '', assignedStatus: '' });
    //   console.log('hello'); 
    // })
    console.log(this.props.statuses);
  }


  render() {
    
    return(
      <div className="Card"> 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Task: </label>
        <input 
        type="text" 
        id="cardTitle" 
        name="title" 
        // disabled
        placeholder={this.props.title} 
        value={this.state.title}
        onChange={this.titleChangeHandler}
        />

        <label htmlFor="creator">Creator: </label>
      <select 
      name="creator" 
      id="cardCreator"
      // disabled
      value={this.state.creator_id}
      placeholder={this.props.creator}
      onChange={this.creatorChangeHandler}
      >
      <Option options={this.props.users} />
      </select>

      <label htmlFor="assignee">Assignee: </label>
      <select 
      name="assignee" 
      id="cardAssignee"
      // disabled
      value={this.state.assignee_id}
      placeholder={this.props.assignee}
      onChange={this.assigneeChangeHandler}
      >
      <Option options={this.props.users} />
      </select>

      <label htmlFor="assignedPriority">Priority: </label>
      <select 
      name="priority" 
      id="cardPriority"
      // disabled
      value={this.state.priority_id}
      placeholder={this.props.priority_id}
      onChange={this.assignedPriorityChangeHandler}
      >
      <Option options={this.props.priorities} />
      </select>

      <label htmlFor="assignedStatus">Status: </label>
      <select 
      name="status" 
      id="cardStatus"
      // disabled
      value={this.state.status_id}
      placeholder={this.props.status_id}
      onChange={this.assignedStatusChangeHandler}
      >
      <Option options={this.props.statuses} />
      </select>
      <button 
      type="submit" 
      // disabled
      >
      Submit
      </button>
      </form>

      <button onClick={this.handleDelete}>Delete</button>

      <button onClick={this.moveStatusRight}> Right </button>

      <button onClick={this.moveStatusLeft}> Left </button>
    
      {/* <h3>Task: {this.state.title}</h3> */}
      {/* <p>Priority level: {this.state.assignedPriority}</p>
      <p>Assigned to: {this.state.assignee}</p>
      <p>Created by: {this.state.creator}</p> */}
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

const mapDispatchToProps = dispatch => {
  return {
    removeCard: (card) => {
      dispatch(removeCard(card));
    },
    editCard: (card) => {
      dispatch(editCard(card));
    },
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadPriorities: () => {
      dispatch(loadPriorities());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Card);