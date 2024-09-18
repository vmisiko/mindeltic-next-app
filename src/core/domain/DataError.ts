//Add more granular error types as needed
export class UnexpectedError extends Error {
  kind: "UnexpectedError";
  message: string;
}

export class ServerError extends Error {
  kind: "ServerError";
  message: string;
}

export class AuthenticationError extends Error {
  kind: "AuthenticationError";
  message: string;
}

export type DataError = UnexpectedError | ServerError | AuthenticationError;
