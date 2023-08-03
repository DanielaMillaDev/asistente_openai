import React from 'react';
import styled from 'styled-components';
import { GiVintageRobot } from "react-icons/gi"
import ChatFormulario from './ChatFormulario';
import Conversacion from './Conversacion';
import Navegacion from './Navegacion';
import { useChat } from '../context/ChatProvider';
import { Descriptor } from '../styled/Descripcion';

const ChatAppContainer = styled.div`
    --vertical-padding: 3vh;

    display: flex;
    gap: 2vw;
    height: 80vh;
    width: 80vw;
    justify-content: space-between;
    background: #e5e7e8;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (max-width: 820px) {
        position: relative;
        width: 100%;
        height: 100vh;
        flex-direction: column-reverse;
        font-size: 0.85rem;
        gap: 0;
    }
`;

const CenterContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 1.5vw;
    flex-direction: column;
    height: 100%;
    margin: auto 0;
    padding: 3vw 1vw;

    @media (max-width: 820px) {
        height: 80%;
    }
    
`;

const Chat = styled.div`
    padding: var(--vertical-padding) var(--vertical-padding) 1.5vh var(--vertical-padding);
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 80%;
    background: #fff;
    border-radius: 30px;

    @media (max-width: 820px) {
        margin: 0 2.5vw;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1.1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 1em;
    height: 3.2em;
    
    & img {
        height: 100%;
        border-radius: 0.7em;
    }

    & h2 {
        font-size: 0.85em;
        font-weight: 600;
    }
`;

const ChatContainer = () => {
    const { userName} = useChat();
    return (
        <ChatAppContainer>
            <Navegacion/>
            <CenterContainer>
                <Chat>
                    <>
                        <Header>
                            <div>
                                <h2>Bienvenido/a {userName} </h2>
                                <Descriptor color='#000' size='0.75em'>Este es un asistente virtual  <GiVintageRobot size='4%' /></Descriptor>
                                
                            </div>
                        </Header>
                        <Conversacion/>
                        <ChatFormulario/>
                    </>
                </Chat>
            </CenterContainer>
        </ChatAppContainer>
    );
};

export default ChatContainer;