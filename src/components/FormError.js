import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = props => {
  const { error } = props

  return <ContentLayout {...props}>
    {error}
  </ContentLayout>
};

FormContainer.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

const ContentLayout = styled.div`
  background-color: #ff000038;
  padding: .5rem;
  border-radius: .3rem;
  font-size: .8rem;
  margin-bottom: 1rem;
  display:${({ error }) => error ? 'block' : 'none'} ;
`;

export default FormContainer;
