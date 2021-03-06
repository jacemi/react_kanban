import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Option from '../../components/Option';


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      creator_id: '',
      assignee_id: '',
      priority_id: '',
      status_id: 1,
      hideForm: true
    };

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.creatorChangeHandler = this.creatorChangeHandler.bind(this);
    this.assigneeChangeHandler = this.assigneeChangeHandler.bind(this);
    this.assignedPriorityChangeHandler = this.assignedPriorityChangeHandler.bind(this);
    this.assignedStatusChangeHandler = this.assignedStatusChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  };

  componentDidMount() {
    this.focusTextInput()
    this.props.loadUsers();
    this.props.loadStatuses();
    this.props.loadPriorities();
  };

  focusTextInput() {
    this.textInput.focus()
  };

  titleChangeHandler(event) {
    const { value } = event.target;
    this.setState({ title: value });
  };

  creatorChangeHandler(event) {
    const { value } = event.target;
    this.setState({ creator_id: value });
  };

  assigneeChangeHandler(event) {
    const { value } = event.target;
    this.setState({ assignee_id: value });
  };

  assignedPriorityChangeHandler(event) {
    const { value } = event.target;
    this.setState({ priority_id: value });
  };

  assignedStatusChangeHandler(event) {
    const { value } = event.target;
    this.setState({ status_id: value });
  };

  toggleForm() {
    if (this.state.hideForm === true) {
      this.setState({ hideForm: false })
    } else {
      this.setState({ hideForm: true });
    }
  };


  handleSubmit(event) {
    event.preventDefault();
    this.props.newCard({ ...this.state });
    this.setState({ title: '', creator_id: '', assignee_id: '', priority_id: '', status_id: 1 });
    this.focusTextInput();
  };

  render() {
    return (
      <div className='Task-form'>
        <form onSubmit={this.handleSubmit} hidden={this.state.hideForm}>

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
            <option value="" selected disabled hidden>Choose here</option>
          </select>

          <label htmlFor="assignee">Assignee: </label>
          <select name="assignee" id="assignee" onChange={this.assigneeChangeHandler}>
            <Option options={this.props.users} />
            <option value="" selected disabled hidden>Choose here</option>
          </select>

          <label htmlFor="assignedPriority">Priority: </label>
          <select name="priority" id="priority" onChange={this.assignedPriorityChangeHandler}>
            <Option options={this.props.priorities} />
            <option value="" selected disabled hidden>Choose here</option>
          </select>


          <label htmlFor="assignedStatus">Status: </label>
          <select name="status" id="status" onChange={this.assignedStatusChangeHandler}>
            <Option options={this.props.statuses} />
          </select>



          <button type="submit">Submit</button>
        </form>
        <a id="cardFormButton" onClick={this.toggleForm}>+ New Task</a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    statuses: state.statuses,
    priorities: state.priorities
  }
};

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