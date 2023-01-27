import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUserEmail } from 'redux/auth/authSelector';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {email}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
