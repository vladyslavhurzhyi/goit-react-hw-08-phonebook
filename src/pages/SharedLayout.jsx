import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Container maxW="container.xl">
        <Box as="header">
          <Flex
            as="nav"
            alignItems="center"
            justifyContent="space-between"
            p={5}
            bgGradient="linear(to top, #373b44, #4286f4)"
          >
            <Button colorScheme="blue" mr={5}>
              <Link to={'contacts'}>Contacts</Link>
            </Button>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div>
                <Button colorScheme="blue" mr={5}>
                  <Link to={'register'}>Register</Link>
                </Button>
                <Button colorScheme="blue">
                  <Link to={'login'}>Login</Link>
                </Button>
              </div>
            )}
          </Flex>
        </Box>
        <Outlet />
      </Container>
    </>
  );
};
