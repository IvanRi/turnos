import React from 'react';
import styled from 'styled-components';
//icons
import { MdMenu, MdClose } from 'react-icons/md';

const Header = props => {
  const { title, setMenuDisplay, currentDisplay } = props;

  return (
    <ContentLayout>
      {title}
      {
        currentDisplay ? <MdClose
          className="menuIcon"
          onClick={() => setMenuDisplay(!currentDisplay)}
        /> : <MdMenu
            className="menuIcon"
            onClick={() => setMenuDisplay(!currentDisplay)}
          />
      }
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  background-color:${({ theme }) => theme.palette.grey};
  color: whitesmoke;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 1.5rem;
  padding: 0 1rem;

  .menuIcon{
    font-size:1.5rem;
    padding:.5rem;
    border-radius: 50%;
    display:none;
    background-color: ${({ theme }) => theme.palette.green};

    @media (max-width: 800px) {
      display:flex;
    }
  }
`;

export default Header;
