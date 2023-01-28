import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box as="ul" listStyleType="none">
        {filteredContacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: {item.number}
              <Button
                type="button"
                colorScheme="blue"
                mt={5}
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
    </Flex>
  );
};
