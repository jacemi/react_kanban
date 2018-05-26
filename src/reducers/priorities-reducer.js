
import { LOAD_PRIORITIES } from '../actions';

initialState = [];

const priorities = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_USERS):
    return [...action.priorities]
    default:
    return state;
  }
}

export default priorities;