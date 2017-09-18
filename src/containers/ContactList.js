import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ contacts, onContactSelected }) => (
  <ul>
    {contacts.map(contact => (
      <Contact key={contact.id} {...contact} onChange={() => onContactSelected(contact.id)} />
    ))}
  </ul>
)

export default ContactList