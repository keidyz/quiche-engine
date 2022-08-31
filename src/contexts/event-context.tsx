import React, { createContext, useContext, useEffect, useState } from 'react';

import events from '../../game-development-files/events.json';
import { GameContext } from './';

export enum Event {
    BACKGROUND = 'background',
    DIALOGUE = 'dialogue',
}

interface EventContextInterface {
    eventIndex: number;
    setEventIndex: (arg: number) => void;
}

export const EventContext = createContext<EventContextInterface>({
    eventIndex: 0,
    setEventIndex: () => {
        return;
    },
});

export const EventProvider: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const { setBackgroundPath, backgrounds } = useContext(GameContext);
    const [eventIndex, setEventIndex] = useState<number>(0);
    useEffect(() => {
        const event = events[eventIndex];
        if (event.type === Event.BACKGROUND) {
            setBackgroundPath(backgrounds[event.value]);
        }
    }, [eventIndex]);

    return (
        <EventContext.Provider
            value={{
                eventIndex,
                setEventIndex,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
