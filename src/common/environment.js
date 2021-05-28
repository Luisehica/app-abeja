const prod = {
  API_URL: "https://run.mocky.io/v3/",
  DELEGATES_URL: "8105e3ea-a848-4ce2-851c-f66f8c58ff3b"
};
  
const dev = {
  API_URL: "https://run.mocky.io/v3/",
  DELEGATES_URL: "8105e3ea-a848-4ce2-851c-f66f8c58ff3b"
};
  
export const environment = process.env.NODE_ENV === "development" ? dev : prod;
