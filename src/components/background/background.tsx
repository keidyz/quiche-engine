import React, { useContext } from 'react';
import styled from 'styled-components';

import { GameContext } from '../../contexts';

const BackgroundWrapper = styled.div<{
    heightPercent: number;
    background: string;
}>`
    background-image: url('${(props) => props.background}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-bottom: ${(props) => props.heightPercent}%;
`;

interface BackgroundProps {
    children?: JSX.Element;
}

export const Background: React.FC<BackgroundProps> = (props) => {
    const { backgroundPath, width, height } = useContext(GameContext);
    const { children } = props;
    const heightPercent = (height / width) * 100;
    return (
        <BackgroundWrapper
            background={backgroundPath}
            heightPercent={heightPercent}
        >
            {children}
        </BackgroundWrapper>
    );
};
