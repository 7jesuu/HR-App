import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import axios from 'axios';

const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSwitchToRegister = () => {
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    // Выполнение POST запроса для входа
    axios
      .post('/auth/login', { email, password })
      .then((response) => {
        console.log('Успешный вход:', response.data);
        // Добавьте здесь логику для обработки успешного входа
      })
      .catch((error) => {
        console.error('Ошибка входа:', error);
        // Добавьте здесь логику для обработки ошибки входа
      });
  };

  const handleRegister = () => {
    // Выполнение POST запроса для регистрации
    axios
      .post('/auth/register', { email, password, confirmPassword })
      .then((response) => {
        console.log('Успешная регистрация:', response.data);
        // Добавьте здесь логику для обработки успешной регистрации
      })
      .catch((error) => {
        console.error('Ошибка регистрации:', error);
        // Добавьте здесь логику для обработки ошибки регистрации
      });
  };

  return (
    <div>
      {showLogin ? (
        <Container maxWidth="xs">
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Вход
            </Typography>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Пароль"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Войти
            </Button>
            <Typography align="center" gutterBottom>
              Нет аккаунта?{' '}
              <Button color="primary" onClick={handleSwitchToRegister}>
                Зарегистрируйтесь
              </Button>
            </Typography>
          </Paper>
        </Container>
      ) : (
        <Container maxWidth="xs">
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Регистрация
            </Typography>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Пароль"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Подтверждение пароля"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
              Зарегистрироваться
            </Button>
            <Typography align="center" gutterBottom>
              Уже есть аккаунт?{' '}
              <Button color="primary" onClick={handleSwitchToLogin}>
                Войдите
              </Button>
            </Typography>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default AuthForm;
