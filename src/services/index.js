import citizenships from "../assets/data/citizenships.json";
import passportTypes from "../assets/data/passport-types.json";

const promisify = (data) =>
  new Promise((resolve) => setTimeout(resolve, 100, data));

export const fetchCitizenships = ({ query = "", limit } = {}) => {
  let data = citizenships;

  const normalizedQuery = query.toLowerCase().trim();

  if (normalizedQuery) {
    data = citizenships.filter((item) =>
      item.nationality.toLowerCase().includes(normalizedQuery)
    );
  }

  if (limit) {
    data = data.slice(0, limit);
  }

  return promisify(data);
};

export const fetchPassportTypes = () => {
  return promisify(passportTypes);
};
