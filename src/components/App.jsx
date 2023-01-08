import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContact, getFilterValue } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleSubmit = ({ name, number }) => {
    const isInContacts = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(name, number));
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
          <Filter value={filter} />
          <ContactsList data={filteredContacts} />
        </>
      )}
    </>
  );
};
