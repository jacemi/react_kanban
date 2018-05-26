
import { LOAD_STATUSES } from '../actions';

initialState = [];

const statuses = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_USERS):
    return [...action.statuses]
    default:
    return state;
  }
}

export default statuses;