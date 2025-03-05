import { ErrorWrapper } from "./styles";
import { ErrorProps } from "./types";

function Error({ message }: ErrorProps) {
  return (
    <ErrorWrapper>
      <h3>API Error</h3>
      <p>{message}</p>
    </ErrorWrapper>
  );
}

export default Error;
