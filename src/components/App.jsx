import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { Contacts } from 'pages/Contacts';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { PublicRoute } from './service/PublicRoute';
import { PrivateRoute } from './service/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { selectUserIsRefreshing } from 'redux/auth/authSelector';
import { useEffect } from 'react';
import { NotFound } from 'pages/NotFound';
import { Home } from './Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="register"
              element={
                <PublicRoute
                  component={Register}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  component={Login}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  );
};
