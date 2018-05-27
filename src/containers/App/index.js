import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';
import { loadCards, newCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Column from '../../components/Column';
import NewCardForm from '../NewCardForm';



class App extends Component {
  constructor(props) {
    super(props);

    // this.addNewCard = this.addNewCard.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  // addNewCard(card) {

    // let cardReqBody = {
    //   title: '',
    //   status_id: null,
    //   priority_id: null,
    //   assignee_id: null,
    //   creator_id: null
    // }

    // let { title, creator, assignee, assignedPriority, assignedStatus } = card;

    // let cardCreator = this.state.users.filter(user => {
    //   return user.name === creator
    // });

    // let cardAssignee = this.state.users.filter(user => {
    //   return user.name === assignee
    // });

    // let cardStatus = this.state.statuses.filter(status => {
    //   return status.name === assignedStatus
    // });

    // let cardPriority = this.state.priorities.filter(priority => {
    //   return priority.name === assignedPriority
    // });
    // cardReqBody.title = title;
    // cardReqBody.status_id = cardStatus[0].id;
    // cardReqBody.priority_id = cardPriority[0].id;
    // cardReqBody.assignee_id = cardAssignee[0].id;
    // cardReqBody.creator_id = cardCreator[0].id;
    // let stringifiedReqBody = JSON.stringify(cardReqBody)

    // return fetch('/cards',
    //   {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: stringifiedReqBody
    //   })
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(cards => {
    //     return this.setState({
    //       cards: [...cards]
    //     })
    //   })
  // }

  componentDidMount() {
    console.log('lifecycle method fired')
    // fetch('/cards')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(cards => {
    //     console.log('fetch cards', cards);
    //     this.props.loadCards(cards);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    // fetch('/users')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(users => {
    //     console.log(users);
    //     this.props.loadUsers(users);
    //     // this.setState({ users });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    // fetch('/priorities')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(priorities => {
    //     console.log(priorities);
    //     this.props.loadPriorities(priorities);
    //     // this.setState({ priorities });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    // fetch('/statuses')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(statuses => {
    //     console.log(statuses);
    //     this.props.loadStatuses(statuses);
    //     // this.setState({ statuses });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    this.props.loadCards();
  }

  toggleForm(){
    let form = document.getElementsByClassName('Task-form');
    if (form.style.display === 'none'){
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  }


  render() {
    console.log('render fired')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kanban</h1>
          <button onClick={this.toggleForm}>+ New Task</button>
        </header>
        <NewCardForm />
        <div className="ColumnContainer">
          <Column cards={this.props.cards} status={1} />
          <Column cards={this.props.cards} status={2} />
          <Column cards={this.props.cards} status={3} />
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
    loadCards: () => {
      dispatch(loadCards());
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
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
