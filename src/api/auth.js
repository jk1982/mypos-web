import apiClient from "./client";

const signin = (email, password) => {
  return apiClient.post("auth/signin/", { email, password });
};

const recovery = email => {
  return apiClient.post("auth/recovery/", email);
};

const reset = (email, token, password, passwordConfirmation) => {
  return apiClient.post("auth/reset/", {
    email,
    token,
    password,
    passwordConfirmation,
  });
};

const verifyResetPasswordToken = (email, token) => {
  return apiClient.post("auth/verify-reset-token/", { email, token });
};

export default {
  signin,
  recovery,
  reset,
  verifyResetPasswordToken,
};
