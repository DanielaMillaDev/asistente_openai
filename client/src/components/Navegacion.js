import React from 'react';
import { GiExitDoor } from "react-icons/gi"
import { useChat } from '../context/ChatProvider';
import styled from 'styled-components';
import { ButtonContainer } from '../styled/Button';

const Nav = styled.nav`
    display: flex;
    width: 6.75em;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    padding: 6vh 5px;
    background: #1a1a1a;
    
    & div {
        justify-content: center;
        width: 100%;
    }

    @media (max-width: 820px) {
        width: 100%;
        height: 5%;
        flex-direction: row;
    }
`;

const Navigation = () => {
    const { setUserName } = useChat();
    //limpiar usuario y salir del chat
    const salirClickHandler = () => {
        setUserName(null);
    }
    return (
        <Nav>
            <ButtonContainer onClick={ salirClickHandler }>
                <a href="#">
                    <GiExitDoor size='100%' />
                </a>
            </ButtonContainer>
        </Nav>
    );
};

export default Navigation;