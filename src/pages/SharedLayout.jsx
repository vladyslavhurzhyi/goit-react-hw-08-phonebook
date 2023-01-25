import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid black',
        }}
      >
        <Link to={'contacts'}>Contacts</Link>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <Link to={'register'}>Register /</Link>
            <Link to={'login'}>Login</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};
