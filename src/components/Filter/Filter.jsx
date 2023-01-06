import React from 'react';
import { Formik, Field } from 'formik';
import { FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

const initialValues = '';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  function onChange(event) {
    const filterInput = event.target.value;

    dispatch(setFilterValue(filterInput));
  }
  return (
    <Formik initialValues={initialValues}>
      <FilterLabel>
        Find contacts by name
        <Field type="text" name="filter" value={value} onChange={onChange} />
      </FilterLabel>
    </Formik>
  );
};
