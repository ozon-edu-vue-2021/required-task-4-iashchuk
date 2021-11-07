import { getErrorMessages } from "./validators";

const validateSurname = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateSurnameOld = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateSurnameLatin = (field) => {
  const errors = {
    required: !field.required,
    alpha: !field.alpha,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateName = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateNameOld = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateNameLatin = (field) => {
  const errors = {
    required: !field.required,
    alpha: !field.alpha,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validatePatronymic = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateEmail = (field) => {
  const errors = {
    required: !field.required,
    email: !field.email,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateBirthdate = (field) => {
  const errors = {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validateCitizenship = (field) => {
  const errors = {
    required: !field.required,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validatePassportSeries = (field) => {
  const errors = {
    required: !field.required,
    numeric: !field.numeric,
    passportSeriesLength: !field.passportSeriesLength,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validatePassportNumber = (field) => {
  const errors = {
    required: !field.required,
    numeric: !field.numeric,
    passportNumberLength: !field.passportNumberLength,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validatePassportNumberInternational = (field) => {
  const errors = {
    required: !field.required,
  };

  return getErrorMessages({
    errors,
    dirty: field.$dirty,
  });
};

const validatePassportDate = (field) => {
  const errors = {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

const validatePassportCountry = (field) => {
  const errors = {
    required: !field.required,
  };

  return getErrorMessages({
    errors,
    dirty: field.$dirty,
  });
};

const validatePassportType = (field) => {
  const errors = {
    required: !field.required,
  };

  return getErrorMessages({ errors, dirty: field.$dirty });
};

export const schema = {
  validateSurname,
  validateSurnameOld,
  validateSurnameLatin,
  validateName,
  validateNameOld,
  validateNameLatin,
  validatePatronymic,
  validateEmail,
  validateBirthdate,
  validateCitizenship,
  validatePassportSeries,
  validatePassportNumber,
  validatePassportNumberInternational,
  validatePassportDate,
  validatePassportCountry,
  validatePassportType,
};
