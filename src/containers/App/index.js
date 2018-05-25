import React, { Component } from 'react';
import './App.css';
import Column from '../../components/Column';
import NewCardForm from '../NewCardForm';

const cardRequest = new Request('/cards');
const userRequest = new Request('/users');
const priorityRequest = new Request('/priorities');
const statusRequest = new Request('/statuses');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      users: [],
      priorities: [],
      statuses: []
    }
    this.addNewCard = this.addNewCard.bind(this);
  }



  addNewCard(card) {

   let cardReqBody = {
    title: '',
    status_id: null,
    priority_id: null,
    assignee_id: null,
    creator_id: null
    }

    let { title, creator, assignee, assignedPriority, assignedStatus } = card; 

    let cardCreator = this.state.users.filter(user => {
      return user.name === creator
    });
   
   let cardAssignee = this.state.users.filter(user => {
      return user.name === assignee
    });

    let cardStatus = this.state.statuses.filter(status => {
      return status.name === assignedStatus
    });
    
    let cardPriority = this.state.priorities.filter(priority => {
      return priority.name === assignedPriority
    });
    cardReqBody.title = title;
    cardReqBody.status_id = cardStatus[0].id;
    cardReqBody.priority_id = cardPriority[0].id;
    cardReqBody.assignee_id = cardAssignee[0].id;
    cardReqBody.creator_id = cardCreator[0].id;
    let stringifiedReqBody = JSON.stringify(cardReqBody)
  
    return fetch('/cards', 
    { 
      method:"POST", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:stringifiedReqBody 
    })
    .then(res => {
      return res.json()
    })
    .then(cards => {
      return this.setState({
        cards: [...cards]
      })
    })
  }

  componentDidMount() {
    fetch(cardRequest)
    .then(res => {
      return res.json()
    })
    .then( cards => {
    
      this.setState({ cards });

    })
    .catch(err => {
      console.log(err);
    })

    fetch(userRequest)
    .then(res => {
      return res.json()
    })
    .then( users => {
      console.log(users);
      this.setState({ users });
    })
    .catch(err => {
      console.log(err);
    })

    fetch(priorityRequest)
    .then(res => {
      return res.json()
    })
    .then( priorities => {
      console.log(priorities);
      this.setState({ priorities });
    })
    .catch(err => {
      console.log(err);
    })

    fetch(statusRequest)
    .then(res => {
      return res.json()
    })
    .then( statuses => {
      console.log(statuses);
      this.setState({ statuses });
    })
    .catch(err => {
      console.log(err);
    })




  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kanban</h1>
        </header>
        <NewCardForm submitHandler={this.addNewCard}/>
        <div className="ColumnContainer">
        <Column cards={this.state.cards} status={1}/>
        <Column cards={this.state.cards} status={2}/>
        <Column cards={this.state.cards} status={3}/>
        </div>
      </div>
    );
  }
}

export default App;
