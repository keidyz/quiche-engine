import React, { FunctionComponent } from 'react';

import { EventProvider } from '../contexts';
import { DialogueBox } from './dialogue-box';

export const PlayHandler: FunctionComponent<{}> = () => {
    return (
        <EventProvider>
            <DialogueBox />
        </EventProvider>
    );
};
