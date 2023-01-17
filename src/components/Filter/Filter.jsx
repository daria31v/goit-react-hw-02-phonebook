
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
  
  
  //   hanleInputChange = e => {
  //     console.log(e.currentTarget);
  //     console.log(e.currentTarget.name);
  //     console.log(e.currentTarget.value);
  //     const { contacts, filter } = e.currentTarget;
  //     this.setState({[contacts]: filter})

  // }

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChange} value={value}></input>
    </>
  );
};