import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import '../stylesheets/App.css'
let Filter = ({ dispatch }) => {
  let showAll = true
  return (
      
    <div>
         <form
            onChange={e => {
                if(showAll){
                    // when the user selects the checkbox, set the filter to hide the unselected contacts via the 'HIDE_UNSELECTED' filter
      
                    dispatch(setVisibilityFilter('HIDE_UNSELECTED'))
                    showAll = !showAll
                }else{
                    // when the user deselects the checkbox, remove any filter from the contacts list                          
                          
                    dispatch(setVisibilityFilter('SHOW_ALL'))
                    showAll = !showAll 
                }
            }}
          >
            <label>Hide Unselected Contacts</label>
            <input type="checkbox" />
      </form>       
    </div>
  )
}
Filter = connect()(Filter)

export default Filter