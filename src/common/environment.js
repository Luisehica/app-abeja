const prod = {
  API_URL: "https://dr0dkqrsh4.execute-api.us-east-1.amazonaws.com/dev/api/v1/",
  DELEGATES_URL: "participacion?top10=All"
};
  
const dev = {
  API_URL: "https://dr0dkqrsh4.execute-api.us-east-1.amazonaws.com/dev/api/v1/",
  DELEGATES_URL: "participacion?top10=All"
};
  
export const environment = process.env.NODE_ENV === "development" ? dev : prod;
