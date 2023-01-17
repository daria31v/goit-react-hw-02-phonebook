import { Button, FormAddContacts } from './ContactForm.styled';
import { nanoid } from "nanoid";
//  import { Formik, Form, Field, ErrorMessage } from 'formik';
//  import * as yup from 'yup';
//  import "yup-phone";
//  import {ErrorText} from './ContactForm.styled'
import { Component } from 'react';

// const FormError = ({name}) => {
//     return(
//         <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}
//         />
//     );
// };

//  const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.string().phone().required()
// });

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  telInputId = nanoid();
  // submitForm = (values, {resetForm}) => {
  //   console.log('VALUES', values);
  //   resetForm();
  //   // this.props.onSubmit(value)
  // };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  submitForm = e => {
    e.preventDefault();

    console.log(this.state)

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };
  hanleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <FormAddContacts>
          <label htmlFor={this.nameInputId}>Name</label>
          <div>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              onChange={this.hanleInputChange}
            />
            {/* <FormError name='name' component="div"/> */}
          </div>
          <label htmlFor={this.telInputId}>Number</label>
          <div>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.telInputId}
              onChange={this.hanleInputChange}
            />
            {/* <FormError name='number' component="div"/> */}
          </div>
        </FormAddContacts>

        <Button type="submit">Add contacts</Button>
      </form>

      // <Formik value={values} onSubmit={this.submitForm} validationSchema={schema}>

      // <Form autoComplete="off">

      //   <FormAddContacts>
      //   <label htmlFor="name">Name</label>
      //   <div>
      //   <Field
      //     type="text"
      //     name="name"
      //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //     required
      //     id="name"
      //     onChange={this.hanleInputChange}
      //   />
      //   <FormError name='name' component="div"/>
      //   </div>
      //   <label htmlFor="tel">Number</label>
      //   <div>
      //   <Field
      //     type="tel"
      //     name="number"
      //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //     required
      //     id="tel"
      //     onChange={this.hanleInputChange}
      //   />
      //   <FormError name='number' component="div"/>
      //   </div>
      //   </FormAddContacts>

      //     <Button type='submit'>Add contacts</Button>

      // </Form>

      // </Formik>
    );
  }
}
