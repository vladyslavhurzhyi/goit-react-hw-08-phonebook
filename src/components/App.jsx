import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { Contacts } from 'pages/Contacts';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { PublicRoute } from './service/PublicRoute';
import { PrivateRoute } from './service/PrivateRoute';

// import PrivateRoute from './service/PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />} />

          {/* <Route
            path="register"
            element={
              <PublicRoute
                component={Register}
                redirectTo="/login"
                restricted
              />
            }
          /> */}
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
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
