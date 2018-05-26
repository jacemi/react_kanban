import { LOAD_CARDS, NEW_CARD, REMOVE_CARD } from '../actions';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_CARDS):
    return [...action.cards]
    case(NEW_CARD):
    return [...state, action.card];
    default:
    return state;
  }
}

export default cards;