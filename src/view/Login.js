import React, { useState } from 'react';
import styled from 'styled-components';
//components
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Login/RegisterForm';

const Login = props => {
  const [formType, setFormType] = useState("login")

  return (
    <ContentLayout>
      {
        formType === 'login' ?
          <LoginForm {...props} setFormType={() => setFormType("registro")} /> :
          <RegisterForm
            setFormType={() => setFormType("login")}
          />
      }
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
`;

export default Login;
