import React from 'react';
import { Item } from './ContactsList.styled';

export const ContactsList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                deleteContact(item.id);
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
