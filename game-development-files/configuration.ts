export interface MainMenuConfiguration {
    backgroundPath: string;
}

export interface DialogueBoxConfiguration {
    backgroundPath: string;
    width: number;
    height: number;
}

const backgrounds = {
    mainMenu: require('./main-menu/bg.png').default,
    dialogueBox: require('./dialogue-box.png').default,
    bgA: require('./bg-a.png').default,
    bgB: require('./bg-b.png').default,
    bgC: require('./bg-c.png').default,
};

const width = 100;
const height = 50;
const mainMenu: MainMenuConfiguration = {
    backgroundPath: backgrounds.mainMenu,
};
const dialogueBox: DialogueBoxConfiguration = {
    backgroundPath: backgrounds.dialogueBox,
    width: 100,
    height: 10,
};

export default { backgrounds, width, height, mainMenu, dialogueBox };
