import React from 'react';
import styled, { css } from 'styled-components';
//icons
import { MdEventAvailable, MdPerson, MdAddAlarm, MdExitToApp } from 'react-icons/md';
//components
import Button from '../Button';
//utils
import { logout } from '../../services/auth';

const LeftBar = props => {
  const { selected, setSelected, currentDisplay, changeDisplay } = props;

  const handleClick = id => {
    setSelected(id);
    changeDisplay(false);
  };

  return (
    <ContentLayout currentDisplay={currentDisplay}>
      <div >
        <Button
          className="addTurn"
          type="primary"
        >
          Nuevo turno
        <MdAddAlarm className="addTurn-icon" />
        </Button>
        <BarElement
          selected={selected}
          id={"Mis turnos"}
          onClick={() => handleClick("Mis turnos")}
        >
          <MdEventAvailable className="addTurn-icon option-icon" />
          Mis turnos
        </BarElement>
        <BarElement
          selected={selected}
          id={"Perfil"}
          onClick={() => handleClick("Perfil")}
        >
          <MdPerson className="addTurn-icon option-icon" />
          Perfil
        </BarElement>
      </div>
      <Button
        className="logoutButton"
        onClick={logout}
      >
        Cerrar sesión
        <MdExitToApp className="addTurn-icon" />
      </Button>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  height: 100vh;
  width:20rem;
  padding:2rem;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-color: ${({ theme }) => theme.palette.darkGrey};

  .option-icon{
    margin-right:1rem;
  }

  .addTurn{
    width:100%;
    display:flex;
    justify-content:center;
  }

  .addTurn-icon{
    font-size:1.5rem;
    margin-left:1rem;
  }

  .logoutButton{
    width:100%;
    display:flex;
    justify-content:center;
  }

  @media (max-width: 800px) {
    position:absolute;
    left:${({ currentDisplay }) => currentDisplay ? 0 : '-20rem'};
    transition: left .5s;
  }
`;

const BarElement = styled.div`
  margin-top:1rem;
  border-radius: .5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  ${ ({ selected, id }) => selected === id && css`background-color: ${({ theme }) => theme.palette.grey};`}
  color: whitesmoke;
  box-sizing:border-box;
  position:relative;
  cursor:pointer;
`;

export default LeftBar;
