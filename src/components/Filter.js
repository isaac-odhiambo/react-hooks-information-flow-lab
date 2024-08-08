import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Meat">Meat</option>
      {/* Add other categories as needed */}
    </select>
  );
}

export default Filter;
