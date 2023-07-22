import React, { useState } from 'react';

const Checklist = () => {
  // Initialize state to keep track of checked options
  const [checkedItems, setCheckedItems] = useState({});

  // Dummy data for checklist options
  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
  ];

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({ ...prevCheckedItems, [name]: checked }));
  };

  return (
    <div>
      <h2>Checklist</h2>
      <form>
        {options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="checkbox"
                name={option.label}
                checked={checkedItems[option.label] || false}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          </div>
        ))}
      </form>
      <h3>Selected Options:</h3>
      <ul>
        {Object.entries(checkedItems).map(([label, checked]) => (
          checked && <li key={label}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
