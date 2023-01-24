import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {items.length > 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        !isLoading && <div> Контактов 0. Добавьте первый контакт.</div>
      )}
    </>
  );
};
