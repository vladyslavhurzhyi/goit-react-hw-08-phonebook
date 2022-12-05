import React from 'react';

export const ContactsList = ({ data, deleteCont }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                deleteCont(item.id);
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
