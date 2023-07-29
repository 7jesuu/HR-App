import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const AdminPanel = () => {
    // Состояния для хранения метрик
    const [employees, setEmployees] = useState([]);
    const [hiresCount, setHiresCount] = useState(0);
    const [firesCount, setFiresCount] = useState(0);
    const [expectedSalaries, setExpectedSalaries] = useState([]);
    const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  
    // Запрос к серверу для получения метрик
    useEffect(() => {
      axios
        .get('/api/metrics') // Замените '/api/metrics' на URL вашего сервера, который будет предоставлять метрики
        .then((response) => {
          const { hires, fires, salaries, birthdays } = response.data;
          setHiresCount(hires.currentMonth);
          setFiresCount(fires.currentMonth);
          setExpectedSalaries(salaries);
          setUpcomingBirthdays(birthdays);
        })
        .catch((error) => {
          console.error('Ошибка получения метрик:', error);
        });
    }, []);
  
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Административная панель
        </Typography>
  
        {/* Метрика: Количество нанятий */}
        <Typography variant="h6" gutterBottom>
          Количество нанятий в текущем месяце: {hiresCount}
        </Typography>
  
        {/* Метрика: Количество увольнений */}
        <Typography variant="h6" gutterBottom>
          Количество увольнений в текущем месяце: {firesCount}
        </Typography>
  
        {/* Метрика: Ожидаемые выплаты ЗП */}
        <Typography variant="h6" gutterBottom>
          Ожидаемые выплаты ЗП по месяцам:
        </Typography>
        <LineChart width={600} height={300} data={expectedSalaries}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" name="Ожидаемая ЗП" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
  
        {/* Метрика: Ближайшие дни рождения */}
        <Typography variant="h6" gutterBottom>
          Ближайшие дни рождения:
        </Typography>
        <ul>
          {upcomingBirthdays.map((birthday) => (
            <li key={birthday.id}>{`${birthday.fullName} (${birthday.birthDate})`}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AdminPanel;
  