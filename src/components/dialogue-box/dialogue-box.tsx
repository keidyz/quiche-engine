import React, { useContext } from 'react';
import styled from 'styled-components';

import { GameContext } from '../../contexts';

const DialogueBoxWrapper = styled.div<{
    heightPercent: number;
    background: string;
}>`
    background-image: url('${(props) => props.background}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-bottom: ${(props) => props.heightPercent}%;
`;

interface DialogueBoxProps {
    children?: JSX.Element;
}

export const DialogueBox: React.FC<DialogueBoxProps> = (props) => {
    const {
        dialogueBox: { backgroundPath, width, height },
    } = useContext(GameContext);
    const { children } = props;
    const heightPercent = (height / width) * 100;
    return (
        <DialogueBoxWrapper
            background={backgroundPath}
            heightPercent={heightPercent}
        >
            {children}
        </DialogueBoxWrapper>
    );
};
