import React from 'react';
import { Formik, Field } from 'formik';
import { FormBox } from './ContactsForm.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/contactSlice';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const { items } = useSelector(getContacts);
  // const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    handleSubmit(value);

    resetForm();
  };

  const handleSubmit = ({ name, number }) => {
    const isInContacts = items.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    // dispatch(addContact(name, number));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormBox>
    </Formik>
  );
};
