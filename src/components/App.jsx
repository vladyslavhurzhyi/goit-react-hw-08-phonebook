import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { getDataFromLS } from './service/getDataFromLS';

const LOKAL_STORAGE = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => getDataFromLS(LOKAL_STORAGE));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOKAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const saveNewContact = (name, number) => {
    const id = nanoid();
    const newContact = {
      id,
      name,
      number,
    };
    return setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = id => {
    return setContacts(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  const handleSubmit = ({ name, number }) => {
    const isInContacts = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    saveNewContact(name, number);
  };

  const onFilter = filterInput => {
    setFilter(filterInput);
  };

  const getFilterContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filteredContacts = getFilterContacts();
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm handleSubmit={handleSubmit} />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter onFilterChange={onFilter} value={filter} />
          <ContactsList deleteContact={deleteContact} data={filteredContacts} />
        </>
      )}
    </>
  );
};
