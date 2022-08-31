import React, { createContext, useState } from 'react';

import configuration, {
    DialogueBoxConfiguration,
    MainMenuConfiguration,
} from '../../game-development-files/configuration';

const { backgrounds, height, width, mainMenu, dialogueBox } = configuration;
export enum Mode {
    MAINMENU = 'main-menu',
    PLAY = 'play',
}

interface GameContextInterface {
    backgrounds: { [key: string]: string };
    backgroundPath: string;
    dialogueBox: DialogueBoxConfiguration;
    mainMenu: MainMenuConfiguration;
    width: number;
    height: number;
    mode: Mode;
    setMode: (arg: Mode) => void;
    setBackgroundPath: (arg: string) => void;
}

export const GameContext = createContext<GameContextInterface>({
    backgrounds,
    backgroundPath: '',
    dialogueBox,
    mainMenu,
    width,
    height,
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
                backgrounds,
                backgroundPath,
                dialogueBox,
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
