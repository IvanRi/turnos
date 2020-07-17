import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
//views
import Login from './view/Login';
import Dashboard from './view/Dashboard';
//themes
import theme from './GlobalStyles/theme';
//endpoint auth
import { userAuth } from './services/endpoints';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    checkAuth() && setIsAuth(true)
  }, [isAuth])

  function setLocalStorageData(key, value) {
    localStorage.setItem(key, value);
  };

  function checkAuth() {
    const userData = localStorage.getItem("user_twirp");
    return userData
  };

  async function _userAuth(user, pass) {
    setAuthError(null)
    //auth
    const res = await userAuth(user, pass);
    if (res.error) return setAuthError(res.error)
    setLocalStorageData("user_twirp", res.token);
    setIsAuth(true);
  };

  return (
    <AppLayout>
      <ThemeProvider theme={theme}>
        <div className="App">
          {
            isAuth ? <Dashboard /> :
              <Login
                onLogin={_userAuth}
                onError={authError}
              />
          }
        </div>
      </ThemeProvider>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  line-height: 1;
  font-family: "Roboto", sans-serif;
  color: #313638;
  background-color: #fffded;
  position:absolute;
  left:0;
  right:0;
  top: 0;
  bottom:0;
`;

export default App;
