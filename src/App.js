import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
//views
import Login from './view/Login';
import Dashboard from './view/Dashboard';
//themes
import theme from './GlobalStyles/theme';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    checkAuth() && setIsAuth(true)
  }, [isAuth])

  function setLocalStorageData(key, value) {
    localStorage.setItem(key, value);
  };

  function checkAuth() {
    const userData = localStorage.getItem("UserData");
    console.log("UserData", userData)
    return userData
  };

  async function userAuth(user, pass) {
    //auth
    setLocalStorageData("UserData", "TOKEN")
    setIsAuth(true)
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {
          isAuth ? <Dashboard /> :
            <Login onLogin={userAuth} />
        }
      </div>
    </ThemeProvider>
  );
};

export default App;
