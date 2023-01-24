import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const Register = () => {
  //
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }, { resetForm }) => {
    console.log(name);
    console.log(email);
    console.log(password);

    dispatch(register({ name, email, password }));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
