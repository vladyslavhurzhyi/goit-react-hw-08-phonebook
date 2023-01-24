import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
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
        <div>
          <Link to={'register'}>Register /</Link>
          <Link to={'login'}>Login</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
