import React from 'react';
import { Formik, Field } from 'formik';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

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
        <Field type="text" name="filter" value={value} onChange={onChange} />
      </FilterLabel>
    </Formik>
  );
};
