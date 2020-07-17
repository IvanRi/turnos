import React from 'react';
import styled from 'styled-components';
//icons
import { MdCheckCircle, MdArrowBack } from 'react-icons/md';
//components
import Button from '../Button';

const RegisterSuccess = props => {
  return (
    <ContentLayout>
      <MdCheckCircle className="svgCustom" />
      <h3 id="myH3">Usuario creado correctamente</h3>
      <Button className="backButton">
        <MdArrowBack /> In al login
      </Button>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #myH3{
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  .backButton{
    width:60%; 
    background-color:${({ theme }) => theme.palette.green};
    display: flex;
    justify-content: center;
    svg{
      font-size:1.5rem;
    }
  }

  .svgCustom{
    color:${({ theme }) => theme.palette.green};
    font-size:5rem;
  }
`;

export default RegisterSuccess;
