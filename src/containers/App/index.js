import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Column from '../../components/Column';

const cardRequest = new Request('/cards');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      cards: [],

    }
  }


  // addNewCard(book) {
  //   return addBook(book)
  //   .then(books => {
  //     return this.setState({
  //       books: [...books]
  //     })
  //   })
  // }

  componentDidMount() {
    this.setState({ title: 'Kanban'});
    fetch(cardRequest)
    .then(res => {
      return res.json()
    })
    .then( cards => {
      console.log(cards);
      this.setState({ cards });
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Column cards={this.state.cards} status={1}/>
        <Column cards={this.state.cards} status={2}/>
        <Column cards={this.state.cards} status={3}/>
      </div>
    );
  }
}

export default App;
