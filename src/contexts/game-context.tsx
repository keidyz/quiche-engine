import React, { createContext, useState } from 'react';

import configuration from '#game-development-files/configuration.json';
import background from '#game-development-files/main-menu/bg.png';

const { height, width } = configuration;

export enum Mode {
    MAINMENU = 'main-menu',
    PLAY = 'play',
}

interface GameContextInterface {
    backgroundPath: string;
    width: number;
    height: number;
    mode: Mode;
}

export const GameContext = createContext<GameContextInterface>({
    backgroundPath: background,
    width: width,
    height: height,
    mode: Mode.MAINMENU,
});

export const GameProvider: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const [mode, setMode] = useState<Mode>(Mode.MAINMENU);
    return (
        <GameContext.Provider
            value={{
                backgroundPath: background,
                width,
                height,
                mode,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
