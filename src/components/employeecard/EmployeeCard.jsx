import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const EmployeeCard = ({ employee, onShowDetails, onAddEmployee }) => {
  const handleAddEmployee = () => {
    onAddEmployee(employee);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {employee.fullName}
        </Typography>
        <Typography variant="body2">{`Должность: ${employee.position}`}</Typography>
        <Typography variant="body2">{`Зарплата: ${employee.salary}`}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onShowDetails(employee)}>Подробнее</Button>
        <Button onClick={handleAddEmployee}>Добавить</Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
