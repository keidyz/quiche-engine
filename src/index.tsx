import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainMenu } from './components';

const root = createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <MainMenu />
    </React.StrictMode>
);
