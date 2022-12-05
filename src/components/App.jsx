import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './Contacts/ContactsItem';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveNewContact = (name, number) => {
    const id = nanoid();
    this.setState(prevState => {
      const newContact = {
        name,
        number,
        id,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  handleSubmit = ({ name, number }) => {
    const contactName = this.state.contacts.map(item => item.name);

    if (
      contactName.filter(item => item === name && item.includes(name)).length >
      0
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.saveNewContact(name, number);
  };

  onFilter = filterInput => {
    this.setState({
      filter: filterInput,
    });
  };

  initialValues = {
    name: '',
    number: '',
  };

  render() {
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm
          handleSubmit={this.handleSubmit}
          check={this.checkDoubleContact}
        />
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilter} value={this.state.filter} />
        <ContactsList
          deleteCont={this.deleteContact}
          data={filteredContacts}
        ></ContactsList>
      </>
    );
  }
}
