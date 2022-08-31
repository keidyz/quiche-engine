import React from 'react';
import { createRoot } from 'react-dom/client';

import { Background, StateHandler } from './components';
import { GameProvider } from './contexts';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Element with id 'root' not found; Terminating");
}

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <GameProvider>
            <Background>
                <StateHandler />
            </Background>
        </GameProvider>
    </React.StrictMode>,
);
