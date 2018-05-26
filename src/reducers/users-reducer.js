
import { LOAD_USERS } from '../actions';

initialState = [];

const users = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_USERS):
    return [...action.users]
    default:
    return state;
  }
}

export default users;