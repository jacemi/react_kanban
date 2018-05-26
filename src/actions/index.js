export const LOAD_CARDS = 'LOAD_CARDS';

export const NEW_CARD = 'NEW_CARD';

export const REMOVE_CARD = 'REMOVE_CARD';

export const loadCards = () => {
  return dispatch => {
    return fetch('/cards')
    .then(res => {
      return res.json()
    })
    .then(cards => {
      console.log('fetch cards', cards);
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

// export const loadCards = cards => {
//   return {
//     type: LOAD_CARDS,
//     cards
//   }
// }

export const newCard = newCard => {
  return dispatch => {






    return fetch('/cards',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: stringifiedReqBody
    })
    .then(res => {
      return res.json()
    })
    .then(cards => {
      dispatch({
        type: NEW_CARD,
        card
      })
    })
  }
}


export const newCard = card => {
  return {
    type: NEW_CARD,
    card
  }
}

export const editCard = card => {
  return {
    type: EDIT_CARD,
    card
  }
}

export const removeCard = card => {
  return {
    type: REMOVE_CARD,
    card
  }
}

export const LOAD_TITLE = 'LOAD_TITLE';

export const EDIT_TITLE = 'EDIT_TITLE';

export const LOAD_CREATOR = 'LOAD_CREATOR';

export const EDIT_CREATOR = 'EDIT_CREATOR';

export const LOAD_ASSIGNEE = 'LOAD_ASSIGNEE';

export const EDIT_ASSIGNEE = 'EDIT_ASSIGNEE';

export const EDIT_PRIORITY = 'EDIT_PRIORITY';

export const LOAD_PRIORITY = 'LOAD_PRIORITY';

export const LOAD_STATUS = 'LOAD_STATUS';

export const EDIT_STATUS = 'EDIT_STATUS';

export const loadTitle = title => {
  return {
    type: LOAD_TITLE,
    title
  }
}

export const editTitle = title => {
  return {
    type: EDIT_TITLE,
    title
  }
}

export const loadCreator = creator => {
  return {
    type: LOAD_CREATOR,
    creator
  }
}

export const editCreator = creator => {
  return {
    type: EDIT_CREATOR,
    creator
  }
}

export const loadAssignee = assignee => {
  return {
    type: LOAD_ASSIGNEE,
    assignee
  }
}

export const editAssignee = assignee => {
  return {
    type: EDIT_ASSIGNEE,
    assignee
  }
}

export const loadPriority = priority => {
  return {
    type: LOAD_PRIORITY,
    priority
  }
}

export const editPriority = priority => {
  return {
    type: EDIT_PRIORITY,
    priority
  }
}

export const loadStatus = status => {
  return {
    type: LOAD_STATUS,
    status
  }
}

export const editStatus = status => {
  return {
    type: EDIT_STATUS,
    status
  }
}

export const LOAD_USERS = 'LOAD_USERS';


export const loadUsers = () => {
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
}


// export const loadUsers = users => {
//   return {
//     type: LOAD_USERS,
//     users
//   }
// }

export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';


export const loadPriorities = () => {
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
}




// export const loadPriorities = priorities => {
//   return {
//     type: LOAD_PRIORITIES,
//     priorities
//   }
// }

export const LOAD_STATUSES = 'LOAD_STATUSES';

export const loadStatuses = () => {
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
}


// export const loadStatuses = statuses => {
//   return {
//     type: LOAD_STATUSES,
//     statuses
//   }
// }



