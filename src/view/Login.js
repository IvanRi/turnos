import React from 'react';
import styled from 'styled-components';
//components
import Input from '../components/Input';
import Button from '../components/Button';

const Login = props => {
  const { onLogin } = props;

  function handleLogin() {
    onLogin();
  };

  return (
    <ContentLayout>
      <div className="formContainer">
        <h3>Iniciar sesión</h3>
        <p style={{ marginBottom: "2rem" }}>Completa los campos para iniciar sesión.</p>
        <Input
          label="Nombre de usuario"
          id="user"
        />
        <Input
          label="Contraseña"
          id="pass"
        />
        <Button
          className="loginButton"
          onClick={handleLogin}
        >
          Iniciar sesión
        </Button>
        <div className="registerContainer">
          ¿Usuario nuevo?
          <p>Registrate</p>
        </div>
      </div>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  background-color: ${({ theme }) => theme.palette.darkGrey};
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  justify-content:center;
  align-items:center;

  h3{
    font-weight:bold;
    font-size:1.8rem;
  }
  
  .formContainer{
    background-color:whitesmoke;
    width:25rem;
    padding:2rem;
    box-sizing:border-box;
    border-radius:.5rem;
  }

  .loginButton{
    border-radius:.7rem;
    font-size:1rem;
    background-color:${({ theme }) => theme.palette.green};
    padding:.7rem 3rem;
    margin:auto;
    margin-top:2rem;
  }

  .registerContainer{
    display:flex;
    justify-content:center;
    margin-top:2rem;

    p{
      margin-left:.5rem;
      color:${({ theme }) => theme.palette.green};
      font-weight:bold;
      cursor:pointer;
    }
  }
`;

export default Login;
