import React from 'react';
import { Formik, Field } from 'formik';

const initialValues = {
  filter: '',
};

export const Filter = ({ onFilterChange, value }) => {
  function onChange(event) {
    const filterInput = event.target.value;
    onFilterChange(filterInput);
  }
  return (
    <Formik initialValues={initialValues}>
      <label>
        Find contacts by name
        <Field type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </Formik>
  );
};
