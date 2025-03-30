export type ValidationErrors = {
  [key: string]: {
    _errors: string[];
  };
};

export type Result<T> = {
  data: {
    state: T;
    success: boolean;
    status: "warn" | "error" | "success" | "info";
    message: string;
  };
  serverError?: string;
  fetchError?: string;
  validationErrors?: ValidationErrors;
};
