import { getErrorMessages } from "./validators";

const isFieldDirty = (field) => field.$dirty;

const validate = (field, errors) =>
  isFieldDirty(field) ? getErrorMessages(errors) : [];

const validateSurname = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateSurnameOld = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateSurnameLatin = (field) =>
  validate(field, {
    required: !field.required,
    alpha: !field.alpha,
  });

const validateName = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateNameOld = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateNameLatin = (field) =>
  validate(field, {
    required: !field.required,
    alpha: !field.alpha,
  });

const validatePatronymic = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateEmail = (field) =>
  validate(field, {
    required: !field.required,
    email: !field.email,
  });

const validateBirthdate = (field) =>
  validate(field, {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  });

const validateCitizenship = (field) =>
  validate(field, {
    required: !field.required,
  });

const validatePassportSeries = (field) =>
  validate(field, {
    required: !field.required,
    numeric: !field.numeric,
    passportSeriesLength: !field.passportSeriesLength,
  });

const validatePassportNumber = (field) =>
  validate(field, {
    required: !field.required,
    numeric: !field.numeric,
    passportNumberLength: !field.passportNumberLength,
  });

const validatePassportNumberInternational = (field) =>
  validate(field, {
    required: !field.required,
  });

const validatePassportDate = (field) =>
  validate(field, {
    required: !field.required,
    dateIsNotInFuture: !field.dateIsNotInFuture,
  });

const validatePassportCountry = (field) =>
  validate(field, {
    required: !field.required,
  });

const validatePassportType = (field) =>
  validate(field, {
    required: !field.required,
  });

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
