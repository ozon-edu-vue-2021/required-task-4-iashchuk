import { getErrorMessages } from "./validators";

const validateSurname = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateSurnameOld = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateSurnameLatin = (field) => {
  const errors = {
    required: !field.required,
    alpha: !field.alpha,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateName = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateNameOld = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateNameLatin = (field) => {
  const errors = {
    required: !field.required,
    alpha: !field.alpha,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePatronymic = (field) => {
  const errors = {
    required: !field.required,
    alphaRus: !field.alphaRus,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateEmail = (field) => {
  const errors = {
    required: !field.required,
    email: !field.email,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateBirthdate = (field) => {
  const errors = {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validateCitizenship = (field) => {
  const errors = {
    required: !field.required,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportSeries = (field) => {
  const errors = {
    required: !field.required,
    numeric: !field.numeric,
    passportSeriesLength: !field.passportSeriesLength,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportNumber = (field) => {
  const errors = {
    required: !field.required,
    numeric: !field.numeric,
    passportNumberLength: !field.passportNumberLength,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportNumberInternational = (field) => {
  const errors = {
    required: !field.required,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportDate = (field) => {
  const errors = {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportCountry = (field) => {
  const errors = {
    required: !field.required,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
};

const validatePassportType = (field) => {
  const errors = {
    required: !field.required,
  };

  if (!field.$dirty) {
    return [];
  }

  return getErrorMessages(errors);
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
