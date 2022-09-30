import styled from "styled-components";

export const UpdateButton = styled.button`
  font-weight: 700;
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  padding: 25px 60px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const ChangeViewButton = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }
`;
