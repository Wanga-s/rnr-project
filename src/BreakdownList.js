import React, { useEffect, useState } from 'react';
import BreakdownService from './BreakdownService';

const BreakdownList = () => {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    BreakdownService.getBreakdowns()
      .then(response => setBreakdowns(response.data))
      .catch(error => console.error('Error fetching breakdowns:', error));
  }, []);

  return (
    <div>
      <h2>Breakdown List</h2>
      <ul>
        {breakdowns.map(breakdown => (
          <li key={breakdown.id}>
            {breakdown.breakdownReference} - {breakdown.companyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakdownList;
