import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  margin-left: 15px;
  max-width: 300px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: #5b3464;
  font-family: 'Road Rage', cursive;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #4a2851;
    background-color: #610465;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='black' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }

  &:active {
    background-color: #381e3f;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #5b3464;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
