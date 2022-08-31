export interface MainMenuConfiguration {
    backgroundPath: string;
}

const width = 50;
const height = 50;
const mainMenu: MainMenuConfiguration = {
    backgroundPath: require('./main-menu/bg.png').default,
};

export default { width, height, mainMenu };
