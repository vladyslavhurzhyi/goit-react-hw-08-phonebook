import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Box, Flex, Text, Container } from '@chakra-ui/react';

export const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container
        pl="10px"
        pr="10px"
        className="containerSL"
        maxW={['400px', '450px', '768px', '900px', '1440px']}
      >
        <Flex bg="gray.100" justify="center" h="100vh" alignItems="flex-start">
          <Box bg="white" p={['0px', '10px']} mt={['0px', '50px']}>
            {error && <p>{error}</p>}
            <Text as="h1" color="black" fontSize="20" mb={5} textAlign="center">
              Phonebook
            </Text>
            <ContactsForm />
            <Text as="h1" color="black" fontSize="20" m={5} textAlign="center">
              Contacts
            </Text>
            {isLoading && <p>Loading...</p>}
            {items.length > 0 ? (
              <>
                <Filter />
                <ContactsList />
              </>
            ) : (
              !isLoading && <div> Контактов 0. Добавьте первый контакт.</div>
            )}
          </Box>
        </Flex>
      </Container>
    </>
  );
};
