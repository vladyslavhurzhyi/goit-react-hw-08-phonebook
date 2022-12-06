import React from 'react';

export const ContactsList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                deleteContact(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
