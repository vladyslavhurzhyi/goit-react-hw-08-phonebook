import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { Item } from './ContactsList.styled';

export const ContactsList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {data.map(item => {
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
