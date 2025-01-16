'use client';

const FilterError = ({ error}) => { 
  return (
    <h1>An Error occured : { error.message}</h1>
  );
}

export default FilterError;