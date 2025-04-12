
import './App.css'
import EmployeeCard from './components/EmployeeCard'
import { useEffect, useState } from 'react';

function App() {

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee();
  }, []);
  
  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3311/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <>
      {employee ? (<EmployeeCard employee={employee} />)
       : (<p>Loading employee...</p>)}
    
      <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
