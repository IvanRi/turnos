import React from 'react';
import styled from 'styled-components';
//icons
import { MdCheckCircle, MdArrowBack } from 'react-icons/md';
//components
import Button from '../Button';

const RegisterSuccess = props => {
  return (
    <ContentLayout>
      <MdCheckCircle />
      <h3>Usuario creado correctamente</h3>
      <Button>
        <MdArrowBack /> In al login
      </Button>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  svg{
    color:${({ theme }) => theme.palette.green};
    font-size:3rem;
  }
`;

export default RegisterSuccess;
