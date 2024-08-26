import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  text-shadow: 
    2px 2px 15px #000,
    1px 1px 2px rgba(0, 0, 0, 0.5),
    0 0 1px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media (max-width: 600px) {
    font-size: 1.5rem; /* Smaller font size for mobile devices */
    padding: 10px; /* Reduce padding for smaller screens */
    text-shadow: 
      1px 1px 10px #000,
      0.5px 0.5px 1px rgba(0, 0, 0, 0.5),
      0 0 0.5px rgba(0, 0, 0, 0.3); /* Adjust shadow for better readability */
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 2rem; /* Medium font size for tablets */
    padding: 15px; /* Adjust padding for tablets */
    text-shadow: 
      1.5px 1.5px 12px #000,
      1px 1px 1.5px rgba(0, 0, 0, 0.5),
      0 0 0.75px rgba(0, 0, 0, 0.3); /* Adjust shadow for medium screens */
  }

  @media (min-width: 1025px) {
    font-size: 3rem; /* Default font size for larger screens */
    padding: 20px; /* Default padding for larger screens */
  }
`;


// Styled component for the button
const StyledButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); // Navigate to the '/other' route
  };

  return (
    <PageContainer>
      <h1>Welcome to the Home Page</h1>
      <StyledButton onClick={handleClick}>Go to Login Page</StyledButton>
    </PageContainer>
  );
};

export default HomePage;
