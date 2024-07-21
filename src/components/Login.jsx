import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, styled } from '@mui/material';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ResponseMessage = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password });
    // Simulating a response
    setResponse('Login successful!');
    setFormVisible(false);
  };

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse('');
        setFormVisible(true);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or response change
    }
  }, [response]);

  return (
    <>
      {formVisible ? (
        <Form>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </LoginButton>
        </Form>
      ) : (
        <ResponseMessage variant="body1" color="textSecondary">
          {response}
        </ResponseMessage>
      )}
    </>
  );
};

export default Login;
