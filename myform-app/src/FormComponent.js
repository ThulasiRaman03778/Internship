// src/FormComponent.js

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from './firebaseConfig';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh; /* Ensure it takes up at least the full viewport height */
  margin-top: 0; /* Reset any default margin-top */
  
  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 30px;
  }

  @media (min-width: 1025px) {
    padding: 50px;
  }
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(53, 69, 75, 0.36);
  box-shadow: inset 0 15px 30px rgba(38, 42, 60, 0.934), 
    0 5px 10px rgba(38, 42, 60, 0.934);
  border: 2px solid rgba(47, 47, 59, 0.086);
  width: 90vw;
  max-width: 400px;
  border-radius: 20px;
  color: #fff;
  font-size: 1.3rem;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 90vw;
    padding: 15px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 70vw;
    padding: 25px;
  }

  @media (min-width: 1025px) {
    width: 30vw;
    padding: 20px;
  }
`;

const Title = styled.p`
  text-align: left;
  color: #fff;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 3.2rem;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (min-width: 1025px) {
    font-size: 3.2rem;
  }
`;

const SubTitle = styled.label`
  font-weight: 700;
  font-size: 1.2rem;
  margin: 5px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 10px;
  position: relative;
`;

const FormStyle = styled.input`
  outline: none;
  border: 2px solid #000c0dd1;
  box-shadow: 0 2px 4px rgba(17, 38, 144, 0.553);
  width: 100%; 
  padding: 12px 10px;
  border-radius: 15px;
  font-size: 15px;
  padding-right: 60px;

  &:focus {
    transform: translateY(4px);
    box-shadow: 0 4px 8px rgba(80, 99, 198, 0.3);
  }

  &::placeholder {
    color: #b0b0b097;
    font-weight: 200;
    opacity: 1;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%; 
`;

const PasswordToggle = styled.button`
  position: absolute;
  padding: 2px 8px; 
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #0b3cadae;
  border-radius: 6px;
  background: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 12px;
  z-index: 1;

  &:hover {
    box-shadow: 0 2px 4px rgba(80, 99, 198, 0.2);
    background-color: #0b3cadae;
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 2px 6px;
    right: 5px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 11px;
    padding: 2px 8px;
    right: 8px;
  }

  @media (min-width: 1025px) {
    font-size: 12px;
    padding: 2px 8px;
    right: 10px;
  }
`;

const Btn = styled.button`
  --color: #0b3cadae;
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    top: 100%;
    left: 100%;
  }

  &:hover {
    color: #fff;

    &:before {
      top: -30px;
      left: -30px;
    }
  }

  &:active:before {
    background: var(--color);
    transition: background 0s;
  }
`;

const Link = styled.a`
 position: relative;
  font-weight: 400;
  color: #fff;
  padding:5px;
  font-size: 0.5rem;
  display: block;
  margin-top: 3px;
  left:60px;

  &:hover {
    color:#fff;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1025px) {
    font-size: 15px;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const Success = styled.p`
  color:white;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const FormComponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle between login and forgot password

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.password.trim() || formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Logged in successfully!');
        // Redirect to a protected route or update state to show authenticated view
      } catch (error) {
        setErrors({ general: error.message });
      }
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail.trim() || !/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetError('Valid email is required');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSuccess('Password reset email sent successfully!');
      setResetError('');
      setResetEmail('');
    } catch (error) {
      setResetError(error.message);
      setResetSuccess('');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <FormArea>
          <Title>{isForgotPassword ? 'Forgot Password' : 'Login'}</Title>
          {isForgotPassword ? (
            <form onSubmit={handleResetPassword}>
              <FormGroup>
                <SubTitle htmlFor="reset-email">Email:</SubTitle>
                <FormStyle
                  placeholder="Enter your email"
                  type="email"
                  id="reset-email"
                  name="reset-email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                {resetError && <Error>{resetError}</Error>}
                {resetSuccess && <Success>{resetSuccess}</Success>}
              </FormGroup>

              <Btn type="submit">Reset Password</Btn>
              <Link href="#" onClick={() => setIsForgotPassword(false)}>Back to Login</Link>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <SubTitle htmlFor="email">Email:</SubTitle>
                <FormStyle
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <Error>{errors.email}</Error>}
              </FormGroup>

              <FormGroup>
                <SubTitle htmlFor="password">Password:</SubTitle>
                <PasswordContainer>
                  <FormStyle
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <PasswordToggle onClick={handlePasswordToggle}>
                    {showPassword ? 'Hide' : 'Show'}
                  </PasswordToggle>
                </PasswordContainer>
                {errors.password && <Error>{errors.password}</Error>}
              </FormGroup>

              {errors.general && <Error>{errors.general}</Error>}
              <Link href="#" onClick={() => setIsForgotPassword(true)}>Forgot Password?</Link>
              <Btn type="submit">SIGN IN</Btn>
            </form>
          )}
        </FormArea>
      </Container>
    </>
  );
};

export default FormComponent;
