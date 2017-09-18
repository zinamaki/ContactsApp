import React, { Component } from 'react';

import '../stylesheets/App.css';
import { connect } from 'react-redux'
import { addContact } from '../actions'

import AddContact from './AddContact'
import Filter from './Filter'
import VisibleContacts from '../containers/VisibleContacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='http://cdn.osxdaily.com/wp-content/uploads/2012/06/iphone-contacts.jpg' className="logo" alt="logo" />
          <h2>Redux Contacts Application</h2>
        </div>
        
        <br />
        To add a contact, fill out their information below:
        <br />
        <br />
        
        <AddContact />
        
        <br />
        <Filter />

        <h4>Contacts List</h4>
        
        <VisibleContacts />
         
      </div>
    );
  }
}

export default App;
