import React, { createContext, useState } from 'react';

import configuration, {
    MainMenuConfiguration,
} from '../../game-development-files/configuration';

const { height, width, mainMenu } = configuration;
export enum Mode {
    MAINMENU = 'main-menu',
    PLAY = 'play',
}

interface GameContextInterface {
    backgroundPath: string;
    mainMenu: MainMenuConfiguration;
    width: number;
    height: number;
    mode: Mode;
    setMode: (arg: Mode) => void;
    setBackgroundPath: (arg: string) => void;
}

export const GameContext = createContext<GameContextInterface>({
    backgroundPath: '',
    mainMenu,
    width: width,
    height: height,
    mode: Mode.MAINMENU,
    setMode: () => {
        return;
    },
    setBackgroundPath: () => {
        return;
    },
});

export const GameProvider: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const [mode, setMode] = useState<Mode>(Mode.MAINMENU);
    const [backgroundPath, setBackgroundPath] = useState<string>(
        mainMenu.backgroundPath,
    );

    return (
        <GameContext.Provider
            value={{
                backgroundPath,
                mainMenu,
                width,
                height,
                mode,
                setMode,
                setBackgroundPath,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
