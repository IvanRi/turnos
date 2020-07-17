const APIURL = process.env.REACT_APP_API

export const userAuth = (name, pass) => fetch(`${APIURL}/login`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(`name=${name}&password=${pass}`)
}).then(res => res.json());

export const userRegister = (name, pass) => fetch(`${APIURL}/register`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(`name=${name}&password=${pass}`)
}).then(res => res.json());