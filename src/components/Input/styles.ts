import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 16px;
  color: #0b0a0aa4;
`

export const InputElement = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 20px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(8px);
  border-radius: 40px;
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`
