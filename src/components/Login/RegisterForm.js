import React, { useRef, useState } from 'react';
import styled from 'styled-components';
//components
import Input from '../Input';
import Button from '../Button';
import Loader from '../Loader';
import FormError from '../FormError';
import RegisterSuccess from './RegisterSuccess'
//endpoints
import { userRegister } from '../../services/endpoints';

const RegisterForm = props => {
  const { setFormType } = props;

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false)

  const userRegisterRef = useRef(null);
  const passRegisterRef = useRef(null);
  const passRepeatRef = useRef(null);

  function redirectLogin() {
    setRegisterSuccess(true)
    setTimeout(() => {
      setFormType('login')
    }, 3000)
  };

  async function handleRegister() {
    const pass = passRegisterRef.current.value
    const passRepeat = passRepeatRef.current.value

    if (pass !== passRepeat) return setError("Las contraseñas no coinciden")
    setIsLoading(true)
    const res = await userRegister(userRegisterRef.current.value, pass)
    setIsLoading(false)
    if (res.error) return setError(res.error)
    redirectLogin()
  };

  return (
    <ContentLayout>
      {
        registerSuccess ? <RegisterSuccess /> :
          <>
            <h3>Registrarme</h3>
            <p style={{ marginBottom: "2rem" }}>Completa los campos para registrarte.</p>
            {error && <FormError error={error} />}
            <Input
              label="Nombre de usuario"
              id="userRegister"
              ref={userRegisterRef}
            />
            <Input
              label="Contraseña"
              id="passRegister"
              type="password"
              ref={passRegisterRef}
            />
            <Input
              label="Repita la contraseña"
              id="passRepeat"
              type="password"
              ref={passRepeatRef}
            />
            <Button
              className="loginButton"
              onClick={handleRegister}
            >
              {isLoading ? <Loader color="white" /> : "Registrarme"}
            </Button>
            <div className="toLogin">
              ¿Ya tienes un usuario?
              <div
                className="pStyle"
                onClick={setFormType}
              >
                Inicia sesión
              </div>
            </div>
          </>
      }
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

  .toLogin{
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

export default RegisterForm;
