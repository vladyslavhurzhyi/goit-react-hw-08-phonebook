import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
        {isLoggedIn ? (
          <Link to={'contacts'}>
            <Box bg="white" p={10} m={10} rounded="md">
              Create new contact.
            </Box>
          </Link>
        ) : (
          <Link to={'register'}>
            <Box bg="white" p={10} m={10} rounded="md">
              Create new contact.
            </Box>
          </Link>
        )}
      </Flex>
    </>
  );
};
