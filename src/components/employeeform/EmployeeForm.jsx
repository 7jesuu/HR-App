import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const EmployeeForm = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({
    fullName: '',
    birthDate: '',
    position: '',
    salary: '',
    hireDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddEmployee(employee);
    setEmployee({
      fullName: '',
      birthDate: '',
      position: '',
      salary: '',
      hireDate: '',
    });
  };

  return (
    <div>
      <h2>Добавить сотрудника</h2>
      <TextField
        label="ФИО"
        name="fullName"
        value={employee.fullName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Дата рождения"
        type="date"
        name="birthDate"
        value={employee.birthDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Должность"
        name="position"
        value={employee.position}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Сумма Заработной платы"
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Дата найма"
        type="date"
        name="hireDate"
        value={employee.hireDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Добавить
      </Button>
    </div>
  );
};

export default EmployeeForm;
