import React, { FunctionComponent, useContext } from 'react';

import { GameContext, Mode } from '../contexts';
import { MainMenu, PlayHandler } from './';

export const StateHandler: FunctionComponent<{}> = () => {
    const { mode } = useContext(GameContext);
    if (mode === Mode.MAINMENU) {
        return <MainMenu />;
    }

    return <PlayHandler />;
};
