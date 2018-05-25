import React, { Component } from 'react';

// import { addBookToFakeXHR as addBook } from '../../lib/books.db';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      creator: '',
      assignee: '',
      assignedPriority: '',
      assignedStatus: ''
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
    this.setState({ creator: value});
  }

  assigneeChangeHandler(event) {
    const { value } = event.target;
    this.setState({ assignee: value});
  }

  assignedPriorityChangeHandler(event) {
    const { value } = event.target;
    this.setState({ assignedPriority: value});
  }

  assignedStatusChangeHandler(event) {
    const { value } = event.target;
    this.setState({ assignedStatus: value});
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.title);
    return this.props.submitHandler(Object.assign({}, this.state))
    .then(() => {
      this.setState({ title: '', creator: '', assignee: '', assignedPriority: '', assignedStatus: '' });
      console.log('hello'); 
    })

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
    <label htmlFor="author">Creator: </label>
     <input 
      type="text" 
      id="creator" 
      name="creator"
      placeholder="Enter card creator"
      value={this.state.creator}
      onChange={this.creatorChangeHandler}
    />

    <label htmlFor="assignee">Assignee: </label>
    <input 
      type="text" 
      id="assignee" 
      name="assignee"
      placeholder="Enter card assignee"
      ref={input => this.textInput = input}
      value={this.state.assignee}
      onChange={this.assigneeChangeHandler}
    />


    <label htmlFor="assignedPriority">Priority: </label>
    <input 
      type="text" 
      id="assignedPriority" 
      name="assignedPriority"
      placeholder="Enter card priority"
      ref={input => this.textInput = input}
      value={this.state.assignedPriority}
      onChange={this.assignedPriorityChangeHandler}
    />

    <label htmlFor="assignedStatus">Status: </label>
    <input 
      type="text" 
      id="assignedStatus" 
      name="assignedStatus"
      placeholder="Enter card status"
      ref={input => this.textInput = input}
      value={this.state.assignedStatus}
      onChange={this.assignedStatusChangeHandler}
    />



    <button type="submit">Submit</button>
    </form>
    <div className="form debugging">
      <span>{this.state.title}</span> <span>{this.state.creator}</span> 
      <span>{this.state.assignee}</span><span>{this.state.assignedStatus}</span><span>{this.state.assignedPriority}</span>
    </div>
    </div>
    )
  }
}

export default NewCardForm;