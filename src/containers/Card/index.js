import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard, removeCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Option from '../../components/Option';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      creator_id: this.props.card.creator_id,
      assignee_id: this.props.card.assignee_id,
      status_id: this.props.card.status_id,
      priority_id: this.props.card.priority_id,
      order: this.props.order,
      hideForm: true
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.creatorChangeHandler = this.creatorChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);
    this.assignedPriorityChangeHandler = this.assignedPriorityChangeHandler.bind(this);
    this.assignedStatusChangeHandler = this.assignedStatusChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveStatusLeft = this.moveStatusLeft.bind(this);
    this.moveStatusRight = this.moveStatusRight.bind(this);
    this.handleDelete = this.handleDelete.bind(this); 
    this.toggleForm = this.toggleForm.bind(this);

  }

  componentDidMount() {
    this.props.loadUsers();
    this.props.loadStatuses();
    this.props.loadPriorities();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    // console.log('snapshot', snapshot); 
    // console.log('current state', this.state);
  }


  titleChangeHandler(event) {
    const { value } = event.target;
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
    if(this.state.status_id > 0){
      var copyState = Object.assign({}, this.state);
      copyState.status_id -= 1;
      this.setState({ status_id: copyState.status_id}, () => {
        this.props.editCard({...this.state});
      });
    }
  }

  moveStatusRight(event) {
    event.preventDefault();
    if(this.state.status_id < 3){
      var copyState = Object.assign({}, this.state);
      copyState.status_id += 1;
      this.setState({ status_id: copyState.status_id}, () => {
        this.props.editCard({...this.state});
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editCard({...this.state})
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.removeCard({...this.state})
  }

  toggleForm(){
    if (this.state.hideForm === true){
      this.setState({ hideForm: false })
    } else {
      this.setState({ hideForm: true});
    }
  }


  render() {
    
    return(
      <div className="Card"> 
      <div className={this.state.order}>
      <form className="Form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Task: </label>
        <input 
        type="text" 
        id="cardTitle" 
        name="title" 
        disabled={this.state.hideForm}
        placeholder={this.props.title} 
        value={this.state.title}
        onChange={this.titleChangeHandler}
        />

        <label htmlFor="creator">Assigned by: </label>
      <select 
      name="creator" 
      id="cardCreator"
      disabled={this.state.hideForm}
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
      disabled={this.state.hideForm}
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
      disabled={this.state.hideForm}
      value={this.state.priority_id}
      placeholder={this.props.priority_id}
      onChange={this.assignedPriorityChangeHandler}
      >
      <Option options={this.props.priorities} />
      </select>

      {/* <label htmlFor="assignedStatus">Status: </label>
      <select 
      name="status" 
      id="cardStatus"
      disabled={this.state.hideForm}
      value={this.state.status_id}
      placeholder={this.props.status_id}
      onChange={this.assignedStatusChangeHandler}
      >
      <Option options={this.props.statuses} />
      </select> */}

      <button 
      type="submit" 
      disabled={this.state.hideForm}
      >
      Submit
      </button>
      </form>

      <button onClick={this.handleDelete} hidden={this.state.hideForm}>Delete</button>

      <button onClick={this.toggleForm} hidden={!this.state.hideForm}>Edit</button>

      <button onClick={this.moveStatusRight}> Right </button>

      <button onClick={this.moveStatusLeft}> Left </button>
    
    </div>
    </div>
    );

  }




}


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