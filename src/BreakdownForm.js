// BreakdownForm.js
import React, { useState } from 'react';
import BreakdownService from './BreakdownService';

const BreakdownForm = () => {
  const [breakdown, setBreakdown] = useState({
    breakdownReference: '',
    companyName: '',
    driverName: '',
    registrationNumber: '',
    breakdownDate: '',
  });

  const handleChange = (e) => {
    setBreakdown({ ...breakdown, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BreakdownService.createBreakdown(breakdown)
      .then(response => console.log('Breakdown created:', response.data))
      .catch(error => console.error('Error creating breakdown:', error));
  };

  return (
    <div>
      <h2>Create Breakdown</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form inputs for each breakdown property */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BreakdownForm;
