import React from 'react';

export const ContactsList = ({ data }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        );
      })}
    </ul>
  );
};
