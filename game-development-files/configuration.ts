export interface MainMenuConfiguration {
    backgroundPath: string;
}

export interface DialogueBoxConfiguration {
    backgroundPath: string;
    width: number;
    height: number;
}


const width = 100;
const height = 50;
const mainMenu: MainMenuConfiguration = {
    backgroundPath: require('./main-menu/bg.png').default,
};
const dialogueBox: DialogueBoxConfiguration = {
    backgroundPath: require('./dialogue-box.png').default,
    width: 100,
    height: 10,
};

export default { width, height, mainMenu, dialogueBox };
