import React from 'react';

type MainMenuButtonProps = {
    text: string;
    onClick: () => void;
};

export const MainMenuButton: React.FC<MainMenuButtonProps> = (props) => {
    const { text, onClick } = props;
    return <button onClick={onClick}>{text}</button>;
};
