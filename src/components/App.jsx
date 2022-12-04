import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  initialValues = {
    name: '',
  };

  handleSubmit = ({ name }, action) => {
    const id = nanoid();
    this.setState(prevState => {
      const newContact = {
        name,
        id,
      };
      prevState.contacts.push(newContact);
    });
  };

  render() {
    return (
      <>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          <Form>
            <label>
              Name
              <Field
                type="text"
                name="name"
                id={this.id}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </>
    );
  }
}
