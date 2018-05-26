
import { LOAD_STATUSES } from '../actions';

const initialState = [];

const statuses = (state = initialState, action) => {
  switch(action.type) {
    case(LOAD_STATUSES):
    return [...action.statuses]
    default:
    return state;
  }
}

export default statuses;