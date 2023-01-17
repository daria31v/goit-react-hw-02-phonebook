import { Component } from 'react';
import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
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

  formSubmit = data => {
    console.log(data)
  }

  hanleInputFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
}

//   hanleInputChange = e => {
//     console.log(e.currentTarget);
//     console.log(e.currentTarget.name);
//     console.log(e.currentTarget.value);
//     const { contacts, filter } = e.currentTarget;
//     this.setState({[contacts]: filter})

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
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit}
          // onUpdate={this.hanleInputChange}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.hanleInputFilter}
        value={this.state.filter}/>

        {/* <ContactList
          items={this.state.contacts}
          onDelete={this.deleteContact}
        /> */}
          <ul>
            <li>Jacob Mercer</li>
          </ul>
        
      </Box>
    );
  }
}
