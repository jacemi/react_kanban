import { LOAD_CARDS, EDIT_CARD, NEW_CARD, REMOVE_CARD } from '../actions';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_CARDS):
    return [...action.cards]
    case(NEW_CARD):
    return [...state, action.card];
    case(EDIT_CARD):
    const unchangedCards = state.filter(card => {
      return card.id !== action.card.id
    })
    return [...unchangedCards, action.card]
    case(REMOVE_CARD):
    const cardsToKeep = state.filter(card => {
      return card.id !== action.card.id
    })
    return [...cardsToKeep]
    return 
    default:
    return state;
  }
}

export default cards;