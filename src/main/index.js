import Phaser from 'phaser';

import PlayScene from './game/play/playScene'
import PreloadScene from './game/init/preloadScene';
import ScoreScene from './game/score/scoreScene';
import GameOverScene from './game/gameOver/gameOverScene';
import MenuScene from './game/menu/menuScene';
import WorldScene from './game/world/worldScene';

import Scenes from './game/scenes';

let preloadScene = new PreloadScene({active: true, key: Scenes.PRELOAD});
let playScene = new PlayScene({active: false, key: Scenes.PLAY});
let scoreScene = new ScoreScene({active: false, key: Scenes.SCORE});
let gameOverScene = new GameOverScene({active: false, key: Scenes.GAME_OVER});
let menuScene = new MenuScene({active: false, key: Scenes.MENU});
let worldScene = new WorldScene({active: false, key: Scenes.WORLD});

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scene: [ preloadScene, worldScene, playScene, scoreScene, menuScene, gameOverScene, ]
};

const game = new Phaser.Game(config);