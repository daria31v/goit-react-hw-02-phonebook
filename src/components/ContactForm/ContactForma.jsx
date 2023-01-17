import {Button, FormAddContacts} from './ContactForm.styled'
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as yup from 'yup';
 import "yup-phone";
 import {ErrorText} from './ContactForm.styled'

const FormError = ({name}) => {
    return(
        <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

 const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().phone().required()
});

const initialValues = {
        name:'',
        number: '',
    }
export const ContactForma = () => {
    
  const addContact = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  };
    
  return (
    <Formik initialValues={initialValues} onSubmit={addContact} validationSchema={schema}>

    <Form autoComplete="off">
      <h1>Phonebook</h1>
      
      <FormAddContacts>
      <label>Name</label>
      <div>  
      <Field
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormError name='name' component="div"/>
      </div>
      <label>Number</label>
      <div>
      <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormError name='number' component="div"/>
      </div>
      </FormAddContacts>
      
      <Button type='submit'>Add contacts</Button>
      
    </Form>
    
    </Formik>
  );
};

