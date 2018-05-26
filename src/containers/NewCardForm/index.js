import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Option from '../../components/Option';

// import { addBookToFakeXHR as addBook } from '../../lib/books.db';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      creator_id: '',
      assignee_id: '',
      priority_id: '',
      status_id: 1
    }

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.creatorChangeHandler = this.creatorChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);
    this.assignedPriorityChangeHandler = this.assignedPriorityChangeHandler.bind(this);
    this.assignedStatusChangeHandler = this.assignedStatusChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this); 
  }

  componentDidMount() {
    this.focusTextInput()
    this.props.loadUsers();
    this.props.loadStatuses();
    this.props.loadPriorities();
  }

  focusTextInput() {
    this.textInput.focus()
  }

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


  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.title);
    this.props.newCard({...this.state})
    this.setState({ title: '', creator_id: '', assignee_id: '', priority_id: '', status_id: '' });
    this.focusTextInput();
    // return this.props.submitHandler(Object.assign({}, this.state))
    // .then(() => {
    //   this.setState({ title: '', creator: '', assignee: '', assignedPriority: '', assignedStatus: '' });
    //   console.log('hello'); 
    // })
    console.log(this.props.statuses);
  }

  render() {
    return(
      <div>
    <form onSubmit={this.handleSubmit}>

    <label htmlFor="title">Task: </label>
    <input 
      type="text" 
      id="title" 
      name="title"
      placeholder="Enter card title"
      ref={input => this.textInput = input}
      value={this.state.title}
      onChange={this.titleChangeHandler}
    />
    <label htmlFor="creator">Creator: </label>
    <select name="creator" id="creator" onChange={this.creatorChangeHandler}>
      <Option options={this.props.users} />
      <option value=""></option>
      </select>

    <label htmlFor="assignee">Assignee: </label>
    <select name="assignee" id="assignee" onChange={this.assigneeChangeHandler}>
      <Option options={this.props.users} />
      <option value=""></option>
      </select>
    
    <label htmlFor="assignedPriority">Priority: </label>
    <select name="priority" id="priority" onChange={this.assignedPriorityChangeHandler}>
      <Option options={this.props.priorities} />
      <option value=""></option>
      </select>
    {/* <input 
      type="text" 
      id="assignedPriority" 
      name="assignedPriority"
      placeholder="Enter card priority"
      ref={input => this.textInput = input}
      value={this.state.assignedPriority}
      onChange={this.assignedPriorityChangeHandler}
    /> */}

    <label htmlFor="assignedStatus">Status: </label>
      <select name="status" id="status" onChange={this.assignedStatusChangeHandler}>
      <Option options={this.props.statuses} />
      </select>

    {/* <input 
      type="text" 
      id="assignedStatus" 
      name="assignedStatus"
      placeholder="Enter card status"
      ref={input => this.textInput = input}
      value={this.state.assignedStatus}
      onChange={this.assignedStatusChangeHandler}
    /> */}


    <button type="submit">Submit</button>
    </form>
    <div className="form debugging">
      <span>{this.state.title}</span> <span>{this.state.creator_id}</span> 
      <span>{this.state.assignee_id}</span><span>{this.state.status_id}</span><span>{this.state.priority_id}</span>
    </div>
    </div>
    )
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
    newCard: card => {
      dispatch(newCard(card));
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






export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);