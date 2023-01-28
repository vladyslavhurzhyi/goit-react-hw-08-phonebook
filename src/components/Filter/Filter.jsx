import React from 'react';
import { Formik, Field } from 'formik';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

const initialValues = '';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

  function onChange(event) {
    const filterInput = event.target.value;

    dispatch(setFilterValue(filterInput));
  }
  return (
    <Formik initialValues={initialValues}>
      <FilterLabel>
        Find contacts by name
        <Field
          as={Input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="search by name"
        />
      </FilterLabel>
    </Formik>
  );
};
