import { Component } from 'react';
import { Box, Button } from './App.styled';
// import { nanoid } from 'nanoid';
// ALERT for add 2 the same
// id = nanoid ( ) //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
// for APP
//   state = {
//   contacts: [],
//   filter: ''
// }

  // state = {
  //   contacts: [],
  //   name: '',
  // };

  // filter
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
// }


  render() {
    return (
      <Box>
       
              {/*
          <h1>Phonebook</h1>
          <ContactForm ... />
          <ContactsForm onSubmit={this.addContacts} />
        <ContactList
          items={this.state.contacts}
          onDelete={this.deleteContact}
        />


          <h2>Contacts</h2>
          <Filter ... />
          
          <ContactList ... />
        */}



        <div>
          <h1>Phonebook</h1>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button>Add contacts</Button>
        </div>
        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input></input>
          <ul>
            <li>Name</li>
          </ul>
        </div>
      </Box>
    );
  }
}



