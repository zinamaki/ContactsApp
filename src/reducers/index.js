import { combineReducers } from 'redux'
import contacts from './contacts.js'
import visibilityFilter from './visibilityFilter'

const contactsApp = combineReducers({
  contacts,
  visibilityFilter
})

export default contactsApp