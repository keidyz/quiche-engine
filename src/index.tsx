import React from 'react';
import { createRoot } from 'react-dom/client';

import { Background } from './components';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Element with id 'root' not found; Terminating");
}

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Background />
    </React.StrictMode>,
);
