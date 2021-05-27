const prod = {
    API_URL: "https://run.mocky.io/v3/",
    DELEGATES_URL: "cddd634b-a39d-4884-94af-83809e4233a8"
  };
  
  const dev = {
    API_URL: "http://asmed58.pragma.com.co:8096/gateway/",
    DELEGATES_URL: "cddd634b-a39d-4884-94af-83809e4233a8"
  };
  
  export const api = process.env.NODE_ENV === "development" ? dev : prod;
  