import React, { useRef, useState } from 'react';
import styled from 'styled-components';
//components
import Input from '../Input';
import Button from '../Button';
import Loader from '../Loader';
import FormError from '../FormError';

const LoginForm = props => {
  const { onLogin, onError, setFormType } = props;

  const [isLoading, setIsLoading] = useState(false)

  const userRef = useRef(null);
  const passRef = useRef(null);

  async function handleLogin() {
    setIsLoading(true)
    await onLogin(userRef.current.value, passRef.current.value)
    setIsLoading(false)
  };

  return (
    <ContentLayout>
      <h3>Iniciar sesión</h3>
      <p style={{ marginBottom: "2rem" }}>Completa los campos para iniciar sesión.</p>
      {onError && <FormError error={onError} />}
      <Input
        label="Nombre de usuario"
        id="user"
        ref={userRef}
      />
      <Input
        label="Contraseña"
        id="pass"
        type="password"
        ref={passRef}
      />
      <Button
        className="loginButton"
        onClick={handleLogin}
      >
        {isLoading ? <Loader color="white" /> : "Iniciar sesión"}
      </Button>
      <div className="registerContainer">
        ¿Usuario nuevo?
        <div
          className="pStyle"
          onClick={setFormType}
        >
          Registrate
        </div>
      </div>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  background-color:whitesmoke;
  width:25rem;
  padding:2rem;
  box-sizing:border-box;
  border-radius:.5rem;

  h3{
    font-weight:bold;
    font-size:1.8rem;
    margin:.5rem 0;
  }

  .loginButton{
    border-radius:.7rem;
    font-size:1rem;
    background-color:${({ theme }) => theme.palette.green};
    width:10rem;
    display:flex;
    justify-content:center;
    height:2.5rem;
    margin:auto;
    margin-top:2rem;
  }

  .registerContainer{
    display:flex;
    justify-content:center;
    margin-top:2rem;

    .pStyle{
      margin-left:.5rem;
      color:${({ theme }) => theme.palette.green};
      font-weight:bold;
      cursor:pointer;
    }
  }
`;

export default LoginForm;
