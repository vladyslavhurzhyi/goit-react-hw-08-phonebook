import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    // <Box alignItems="center">
    <Container
      pl="10px"
      pr="10px"
      className="containerSL"
      maxW={['400px', '450px', '768px', '900px', '1440px']}
    >
      <Box
        as="ul"
        listStyleType="none"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        wordBreak="break-word"
      >
        {filteredContacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: {item.number}
              <Button
                minW="auto"
                type="button"
                colorScheme="red"
                onClick={() => {
                  dispatch(deleteContact(item.id));
                }}
              >
                Delete
              </Button>
            </Item>
          );
        })}
      </Box>
    </Container>
  );
};
