import React from 'react';
import styled from 'styled-components';

import configuration from '#game-development-files/configuration.json';
import background from '#game-development-files/main-menu/bg.png';

const { height, width } = configuration;
const heightPercent = (height / width) * 100;

const BackgroundWrapper = styled.div`
    background-image: url('${background}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-bottom: ${heightPercent}%;
`;

export const Background: React.FC<any> = (props) => {
    return <BackgroundWrapper>{props.children}</BackgroundWrapper>;
};
