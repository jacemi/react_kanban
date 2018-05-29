import React from 'react';

const Option = ({ options }) => {
  return options.map(option => {
    return (
      <option value={option.id}>{option.name}</option>
    )
  })
};

export default Option;