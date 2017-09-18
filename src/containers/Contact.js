import React from 'react'
import PropTypes from 'prop-types'
import { toggleSelected } from '../actions'

let Contact = ({ onChange, selected, name, number, id }) => (

  <li>
    <form
        onChange={onChange}
        style={{
          background: selected ? '#3498db' : '#FFFFFF'
        }}
    >
        Name: {name}  <br />
        Number: {number} <br />
        <input type='checkbox' defaultChecked={selected} onChange={this.onChange}/>
    
    </form>
    
  </li>
)

export default Contact