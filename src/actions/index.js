const ADD_CONTACT = 'ADD_CONTACT'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const TOGGLE_SELECTED = 'TOGGLE_SELECTED'

let contactId = 0
// id is required in order to search through the contacts and toggle a particular contact as selected

export const addContact = (name,number) => {
    return {
        type: ADD_CONTACT,
        id: contactId++,
        name,
        number
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleSelected = id => {
  return {
    type: TOGGLE_SELECTED,
    id
  }
}