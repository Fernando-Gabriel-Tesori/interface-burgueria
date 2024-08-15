import styled from 'styled-components';
import BackgroundLogin from '../../assets/wall.png';
import Background from '../../assets/background.png';

const colors = {
  primary: '#5b3464',
  secondary: '#ffffff',
  background: '#1E1E1E',
  border: '#5b3464',  
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;  
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background: url('${Background}');
  background-size: cover;
  background-position: center;
  background-color: ${colors.background};
`;

export const Title = styled.h2`
  font-size: 28px;  
  color: ${colors.secondary};
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  span {
    color: ${colors.primary};  
  }

  @media (max-width: 768px) {
    font-size: 22px;  
  }
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${colors.secondary};
  }

  input {
    width: 100%;
    padding: 14px;
    border: 1px solid ${colors.border};
    border-radius: 6px;
    font-size: 16px;
    color: ${colors.background};
    background-color: ${colors.secondary};

    &:focus {
      border-color: ${colors.primary};
      outline: none;
    }
  }
`;

export const Link = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  text-align: center;  
  

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
  line-height: 80%;
`;

