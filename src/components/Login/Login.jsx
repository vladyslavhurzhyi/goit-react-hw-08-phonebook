import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

export const Login = () => {
  //
  const onSubmit = ({ email, password }, { resetForm }) => {
    console.log(email);
    console.log(password);

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
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
