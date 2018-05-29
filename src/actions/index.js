export const LOAD_CARDS = 'LOAD_CARDS';

export const NEW_CARD = 'NEW_CARD';

export const EDIT_CARD = 'EDIT_CARD';

export const REMOVE_CARD = 'REMOVE_CARD';

export const loadCards = () => {
  return dispatch => {
    return fetch('/cards')
    .then(res => {
      return res.json()
    })
    .then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

}

export const newCard = newCard => {
  return dispatch => {
    return fetch('/cards',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard)
    })
    .then(res => {
      return res.json()
    })
    .then(card => {
      dispatch({
        type: NEW_CARD,
        card
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}


export const removeCard = card => {
  return dispatch => {
    return fetch(`/cards/${card.id}`,
    {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card)
    })
    .then(res => {
      return res.json()
    })
    .then(card => {
      dispatch({
        type: REMOVE_CARD,
        card
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}


export const editCard = card => {
  return dispatch => {
    return fetch(`/cards/${card.id}`,
    {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card)
    })
    .then(res => {
      return res.json()
    })
    .then(card => {
      dispatch({
        type: EDIT_CARD,
        card
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}


export const LOAD_USERS = 'LOAD_USERS';


export const loadUsers = () => {
  return dispatch => {
  return fetch('/users')
  .then(res => {
    return res.json()
  })
  .then( users => {
    dispatch({
      type: LOAD_USERS,
      users
    })
  })
  .catch(err => {
    console.log(err);
  })
}
}


export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';


export const loadPriorities = () => {
  return dispatch => {
  return fetch('/priorities')
  .then(res => {
    return res.json()
  })
  .then( priorities => {
    dispatch({
      type: LOAD_PRIORITIES,
      priorities
    })
  })
  .catch(err => {
    console.log(err);
  })
}
}


export const LOAD_STATUSES = 'LOAD_STATUSES';

export const loadStatuses = () => {
  return dispatch => {
  return fetch('/statuses')
  .then(res => {
    return res.json()
  })
  .then( statuses => {
    dispatch({
      type: LOAD_STATUSES,
      statuses
    })
  })
  .catch(err => {
    console.log(err);
  })
}
}




