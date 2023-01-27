import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';

const initialValues = {
  email: '',
  password: '',
};

export const Login = () => {
  //

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
        </div>
        <button type="submit">LogIn</button>
      </Form>
    </Formik>
  );
};
