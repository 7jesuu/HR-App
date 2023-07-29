import React, { useState } from 'react';
import EmployeeForm from '../employeeform/EmployeeForm'; 
import EmployeeCard from '../employeecard/EmployeeCard'; 
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployeeHandler = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleShowDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h1>Страница сотрудников</h1>
      <EmployeeForm onAddEmployee={addEmployeeHandler} />
      <div style={{ marginTop: '20px' }}>
        {employees.map((employee, index) => (
          <EmployeeCard key={index} 
            employee={employee} 
            onShowDetails={handleShowDetails}
          />
        ))}
      </div>
      <Dialog open={selectedEmployee !== null} onClose={handleCloseDetails}>
        <DialogTitle>Информация о сотруднике</DialogTitle>
        <DialogContent>
          {selectedEmployee && (
            <>
              <Typography variant="h6">{selectedEmployee.fullName}</Typography>
              <Typography variant="body2">{`Дата рождения: ${selectedEmployee.birthDate}`}</Typography>
              <Typography variant="body2">{`Должность: ${selectedEmployee.position}`}</Typography>
              <Typography variant="body2">{`Зарплата: ${selectedEmployee.salary}`}</Typography>
              <Typography variant="body2">{`Дата найма: ${selectedEmployee.hireDate}`}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeePage;
