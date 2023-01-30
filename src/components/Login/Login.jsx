import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

const initialValues = {
  email: '',
  password: '',
};

export const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(() =>
        toast({
          title: `Success login`,
          status: 'success',
          isClosable: true,
          position: 'top',
        })
      )
      .catch(() =>
        toast({
          title: `Try again with another email or password`,
          status: 'error',
          isClosable: true,
          position: 'top',
        })
      );
    resetForm();
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
      <Box bg="white" p={10} m={10} rounded="md">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            </div>
            <Button type="submit" colorScheme="blue" w="full" mt={5}>
              Login
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};
