const nameValidation = {
  required: true,
  minLength: 3,
  maxLength: 20,
};

const emailValidation = {
  required: true,
  pattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const passwordValidation = {
  required: true,
  minLength: 6,
  pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
};

export { nameValidation, emailValidation, passwordValidation };
