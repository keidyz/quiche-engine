import React, { useContext } from 'react';

import { GameContext, Mode } from '../../contexts';
import { MainMenuButton } from './main-menu-button';

interface PlayButtonProps {
    text: string;
}
export const PlayButton: React.FC<PlayButtonProps> = ({ text }) => {
    const { setMode } = useContext(GameContext);
    return (
        <MainMenuButton
            text={text}
            onClick={() => {
                setMode(Mode.PLAY);
            }}
        />
    );
};
