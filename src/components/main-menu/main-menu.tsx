import React from 'react';
import styled from 'styled-components';
import { MainMenuButton } from './main-menu-button';
import background from '#game-development-files/main-menu/bg.png';

const Background = styled.img`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`;

export const MainMenu = () => {
    return (
        <div>
            <Background src={background} />
            <MainMenuButton text="Play" />
        </div>
    );
};
