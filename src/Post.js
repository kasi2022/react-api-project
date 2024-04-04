import React, { useState } from 'react';
import axios from 'axios';

const RegisterUserComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:8WvB9utG/register_user', {
        email,
        password
      });
      console.log('User registered successfully:', response.data);
      // You can handle success response here (e.g., redirect to a success page)
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Failed to register user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUserComponent;
