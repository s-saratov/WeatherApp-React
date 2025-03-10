import styled from '@emotion/styled';

export const ErrorWrapper = styled.div`
  width: 710px;
  height: 180px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  backdrop-filter: blur(4px);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  gap: 6px;
`;

export const ErrorLabel = styled.div`
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  font-size: 57px;
  color: rgba(243, 94, 94, 1);
`;

export const ErrorDescription = styled.div`
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
`;