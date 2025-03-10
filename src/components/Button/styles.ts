import styled from '@emotion/styled';

interface MainButtonStyledProps {
  disabled: boolean
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 100%;
  min-height: 48px;
  outline: none;
  border: none;
  padding: 12px 40px 12px 40px;
  background:${({ disabled }) => disabled ? '#bebec7' : 'rgba(54, 120, 180, 1)'};
  border-radius: 50px;
  color: white;
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`