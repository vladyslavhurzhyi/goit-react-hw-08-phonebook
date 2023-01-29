import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUserEmail } from 'redux/auth/authSelector';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  return (
    <Flex align="center">
      <Text color="white" fontSize={['10px', '12px', '14px', '16px']}>
        Welcome, {email}
      </Text>
      <Button
        type="button"
        colorScheme="blue"
        w="full"
        ml={5}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};
