import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContact, getFilterValue } from 'redux/selectors';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filteredContacts = getFilterContacts();

  return (
    <ul>
      {filteredContacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};
