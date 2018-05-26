import { combineReducers } from 'redux';

import cards from './cards-reducer';
import users from './users-reducer';
import statuses from './statuses-reducer';
import priorities from './priorities-reducer';

export default combineReducers({
  cards,
  users,
  statuses,
  priorities
})