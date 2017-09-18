import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'
import '../stylesheets/component.css'
let AddContact = ({ dispatch }) => {
  let input_name
  let input_number

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input_name.value.trim()) {
            return
          }
          // add the contact and reset the fields to allow easy entry for another contact
          dispatch(addContact(input_name.value, input_number.value))
          input_name.value = ''
          input_number.value = ''
        }}
      >
        <label>Name:</label>
        <input
          ref={node => {
            input_name = node
          }}
        />
            <br />
        <label>Number:</label>
        <input
          ref={node => {
            input_number = node
          }}
        />
            <br />
            
        <button className='btn-4' type="submit">
          Add Contact
        </button>
          
      </form>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact