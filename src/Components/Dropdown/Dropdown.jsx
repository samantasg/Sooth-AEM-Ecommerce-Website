import React, { useState } from 'react';
import Select from 'react-select';

function Dropdown() {

const options = [
  { value: 'new', label: 'New' },
  { value: 'recommended', label: 'Recommended' },
  { value: 'titleAscending', label: 'Title Ascending' },
  { value: 'titleDescending', label: 'Title Descending' },
  { value: 'priceAscending', label: 'Price Ascending' },
  { value: 'pricedescending', label: 'Price Descending' }
];

const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="dropdown-menu" >
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    )
}

export default Dropdown
