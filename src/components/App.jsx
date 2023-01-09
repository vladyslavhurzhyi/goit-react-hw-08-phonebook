import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContact);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <div>Контактов 0. Добавьте первый контакт.</div>
      )}
    </>
  );
};
