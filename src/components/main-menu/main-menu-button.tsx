import React from 'react';

type MainMenuButtonProps = {
    text: string;
};

export const MainMenuButton: React.FC<MainMenuButtonProps> = (props) => {
    const { text } = props;
    return <button>{text}</button>;
};
