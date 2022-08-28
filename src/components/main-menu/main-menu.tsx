import React from 'react';
import styled from 'styled-components';

import background from '#game-development-files/main-menu/bg.png';

const Background = styled.img`
    width: 100%;
`;

export const MainMenu = () => {
    return <Background src={background} />;
};
