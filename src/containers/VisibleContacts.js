import { connect } from 'react-redux'

import ContactList from './ContactList'
import {toggleSelected} from '../actions'

const getVisibleContacts = (contacts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return contacts
    case 'HIDE_UNSELECTED':
      return contacts.filter(c => c.selected)
  }
}

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContactSelected: id => {
      dispatch(toggleSelected(id))
    }
  }
}

const VisibleContacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default VisibleContacts