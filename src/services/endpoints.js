//aca van a estar los endpoints
const PROD_URL = "https://followmeapi.herokuapp.com"
const DEV_URL = "http://localhost:4001"

export const userAuth = (name, pass) => fetch(`${DEV_URL}/login`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(`name=${name}&password=${pass}`)
}).then(res => res.json());

export const userRegister = (name, pass) => fetch(`${DEV_URL}/register`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(`name=${name}&password=${pass}`)
}).then(res => res.json());