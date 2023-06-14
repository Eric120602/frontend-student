import { setLogin } from "../session/session";
import APIError from "./error";


const APIUrl = "http://localhost:5000"
export default async function handler(method, url, body = {}, params) {
  let request = {
    method: method,
    headers: {
      "user-type": "trainee",
      "Authorization": localStorage.getItem("trainee-auth-token")
    }
  }

  if (method === "POST" || method === "PUT") {
    request.headers['Content-Type'] = 'application/json'
    request.body = JSON.stringify(body)
  }

  let queryParams = ""
  if (params) {
    let queryParamsProperties = []
    for (const property in params) {
      queryParamsProperties.push(`${property}=${params[property]}`)
    }
    queryParams = "?" + queryParamsProperties.join("&")
  }

  const response = await fetch(APIUrl + url + queryParams, request);
  if (response.status === 401) {
    setLogin("0");
    localStorage.removeItem("trainee-auth-token")
    window.location.replace(
      "/login"
    );
  }
  if (!response.ok) {
    const error = await response.json()
    throw new APIError(error.errorMessage, response.status);
  }
  return response.json();
}