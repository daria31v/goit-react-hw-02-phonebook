import { Component } from 'react';
import { Box } from './App.styled';
import { ContactForma } from './ContactForm/ContactForma';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';
// ALERT for add 2 the same
// id = nanoid ( ) //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  // for APP
  state = {
    contacts: [],
    filter: '',
  };

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
  // onChange =

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
          <Filter onChange={e => this.setState({filter: e.target.value})} />
          
          <ContactList ... />
        */}

        <ContactForma />

        {/* <form>
          <h1>Phonebook</h1>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button>Add contacts</Button>
        </form> */}

        <div>
          <h2>Contacts</h2>
          <Filter onChange={e => this.setState({ filter: e.target.value })}
            value={this.state.filter}
          />
          {/* <p>Find contacts by name</p>
          <input></input> */}
          <ul>
            <li>Jacob Mercer</li>
          </ul>
        </div>
      </Box>
    );
  }
}
