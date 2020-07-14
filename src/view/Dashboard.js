import React, { useState } from 'react';
import styled from 'styled-components';
//components
import LeftBar from '../components/LeftBar/LeftBar';
import Header from '../components/Header';
import MyTurns from './MyTurns';
import Perfil from './Perfil';

const Dashboard = props => {
  const [selected, setSelected] = useState('Mis turnos');
  const [menuDisplay, setMenuDisplay] = useState(false);

  function setCurrentPage() {
    return selected === "Mis turnos" ? <MyTurns /> : <Perfil />
  };

  return (
    <ContentLayout>
      <LeftBar
        selected={selected}
        setSelected={setSelected}
        currentDisplay={menuDisplay}
        changeDisplay={setMenuDisplay}
      />
      <PageContent>
        <Header
          title={selected}
          setMenuDisplay={setMenuDisplay}
          currentDisplay={menuDisplay}
        />
        <div className="dataContainer">
          {setCurrentPage()}
        </div>
      </PageContent>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  display:flex;
  overflow:hidden;
`;

const PageContent = styled.div`
  width: calc(100vw - 20rem);

  .dataContainer{
    height: calc(100vh - 4rem);
  }

  @media (max-width: 800px) {
    width:100vw;
  }
`;

export default Dashboard;
