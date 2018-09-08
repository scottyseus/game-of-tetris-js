import Phaser from "phaser";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'src/assets/img/sky.png');
}

function create() {
    this.add.image(400, 300, 'sky');
}

function update() {

}