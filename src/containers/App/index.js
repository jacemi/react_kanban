import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';
import { loadCards, newCard, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import Column from '../../components/Column';
import NewCardForm from '../NewCardForm';



class App extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this.props.loadCards();
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kanban</h1>
        </header>
        <NewCardForm />
        <div className="ColumnContainer">
          <Column cards={this.props.cards} statusName="In Queue" status_id={1}order={"Column-1"}/>
          <Column cards={this.props.cards} statusName="In Progress" status_id={2} order={"Column-2"} />
          <Column cards={this.props.cards} statusName="Done" status_id={3} order={"Column-3"} />
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
