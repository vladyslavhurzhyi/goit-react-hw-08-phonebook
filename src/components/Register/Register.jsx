import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

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

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                Name
                <Field as={Input} type="text" name="name" />
              </label>
              <label>
                Email
                <Field as={Input} type="email" name="email" />
              </label>
              <label>
                Password
                <InputGroup size="md">
                  <Field
                    as={Input}
                    pr="4.5rem"
                    // type={show ? 'text' : 'password'}
                    type={show ? 'text' : 'password'}
                    name="password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </label>
              {/* <label>
                Password
                <Field as={Input} type="password" name="password" />
              </label> */}
            </div>
            <Button type="submit" colorScheme="blue" w="full" mt={5}>
              Sign Up
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};
