import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing after registration
import Swal from 'sweetalert2'; // For SweetAlert
import './Register.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Ensures Gmail format
  const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password: min 8 chars, at least 1 uppercase, 1 special character
  const upiPinRegex = /^\d{4}$/; // Only 4 digits

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password || !upiPin) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email. Must be in the format: example@gmail.com');
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.'
      );
      return;
    }

    if (!upiPinRegex.test(upiPin)) {
      setErrorMessage('UPI PIN must be exactly 4 digits.');
      return;
    }

    // If all validations pass, show success message using SweetAlert
    Swal.fire({
      title: 'Registration Successful',
      text: 'You have successfully registered!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/login'); // Redirect to login page after successful registration
    });
  };

  return (
    <div className="register-page-container">
      <div className="register-page">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. example@gmail.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters, with 1 uppercase & 1 special character"
            />
          </div>

          <div className="form-group">
            <label htmlFor="upiPin">UPI PIN:</label>
            <input
              type="tel"
              id="upiPin"
              maxLength="4"
              value={upiPin}
              onChange={(e) => setUpiPin(e.target.value)}
              placeholder="4-digit PIN"
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="login-redirect">
          <a href="/">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
