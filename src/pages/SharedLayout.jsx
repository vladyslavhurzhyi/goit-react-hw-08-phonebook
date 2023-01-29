import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { Button, Box, Flex, Container } from '@chakra-ui/react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box as="header" w="100%" bgGradient="linear(to top, #373b44, #4286f4)">
        <Container
          pl="10px"
          pr="10px"
          className="containerSL"
          maxW={['400px', '450px', '768px', '900px', '1440px']}
        >
          <Flex
            // minW="320px"
            pt={5}
            pb={5}
            as="nav"
            justifyContent={isLoggedIn ? 'space-between' : 'flex-end'}
          >
            {isLoggedIn && (
              <Button colorScheme="blue" mr={5}>
                <Link to={'contacts'}>Contacts</Link>
              </Button>
            )}
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
        </Container>
      </Box>

      <Outlet />
    </>
  );
};
