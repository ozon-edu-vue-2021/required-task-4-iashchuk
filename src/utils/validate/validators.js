import {
  required,
  requiredIf,
  alpha,
  email,
  numeric,
  helpers,
} from "vuelidate/lib/validators";
import isFuture from "date-fns/isFuture";
import parse from "date-fns/parse";

export const validators = {
  required,
  requiredIf,
  alpha,
  alphaRus: helpers.regex("alphaRus", /^[а-яё]*$/i),
  numeric,
  email,
  dateIsNotInFuture: (value) => {
    const date = parse(value, "yyyy-MM-dd", new Date());
    return !isFuture(date);
  },
  passportSeriesLength: (value) => value.length === 4,
  passportNumberLength: (value) => value.length === 6,
};

const errorMessages = {
  required: "Обязательное поле",
  alpha: "Только латинские буквы",
  alphaRus: "Только русские буквы",
  numeric: "Только цифры",
  email: "Неправильный формат электронной почты",
  dateIsNotInFuture: "Дата не должна быть больше текущей",
  passportSeriesLength: "Длина должна быть 4 цифры",
  passportNumberLength: "Длина должна быть 6 цифры",
};

export const getErrorMessages = (errors) => {
  return Object.entries(errors).reduce((acc, [key, value]) => {
    if (value) {
      const message = errorMessages[key] || "Неправильно заполнено поле";
      acc.push(message);
    }
    return acc;
  }, []);
};
