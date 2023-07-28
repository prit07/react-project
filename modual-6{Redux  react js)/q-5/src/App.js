import React, { useState } from 'react';

function App() {

    const initialData = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Bob Johnson', age: 28 },
      // Add more data rows as needed
    ];
  
    const [data, setData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div >
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <table className=''>
          <thead>
            <tr className=''>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default App;
