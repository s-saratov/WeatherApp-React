import { ErrorDescription, ErrorLabel, ErrorWrapper } from "./styles";
import { ErrorProps } from "./types";

function Error({ message }: ErrorProps) {
  return (
    <ErrorWrapper>
      <ErrorLabel>API Error</ErrorLabel>
      <ErrorDescription>{message}</ErrorDescription>
    </ErrorWrapper>
  );
}

export default Error;
