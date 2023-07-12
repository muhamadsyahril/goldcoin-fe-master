var baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

var apiUrlIamCore = process.env.REACT_APP_API_URL_IAM_SERVICE || "http://localhost:3000";
var apiUrlApi = process.env.REACT_APP_API_GOLDCOIN_URL;
var apiUrlExchange = process.env.REACT_APP_API_EXCHANGE_URL;
var thirdpartyGoogleApi = process.env.REACT_APP_THIRDPARTY_GOOGLE_API || "AIzaSyDzZpj4cB8ijdRVffPk0wV6BXdTlTrkiy0";

export const urlCms = `${baseUrl}`;
export const coreIamApi = `${apiUrlIamCore}/v1`;
export const axiosApi = `${apiUrlApi}`;
export const axiosExchange = `${apiUrlExchange}`;
export const googleApi = `${thirdpartyGoogleApi}`;
