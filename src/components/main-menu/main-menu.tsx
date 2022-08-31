import React, { useContext, useEffect } from 'react';

import { GameContext } from '../../contexts';
import { PlayButton } from './play-button';

export const MainMenu = () => {
    const { setBackgroundPath, mainMenu } = useContext(GameContext);
    useEffect(() => {
        setBackgroundPath(mainMenu.backgroundPath);
    }, []);

    return (
        <div>
            <PlayButton text="Play" />
        </div>
    );
};
