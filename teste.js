var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400, 
    }
    scene: {
        preload: preload;
        create: create;
        update: update;
    }

var game  = new Phaser.Game(config);

var player;

function preload(){
    this.load.image('inicioBackgroung', 'background/testeBackgroung.png')
    this.load.image('player', 'personagem/gato.png')

}

function create(){
    this.add.image(0, 0, 'inicioBackground').setOrigin(0,0);
    this.add.image(300, 200, 'player').setScale(0.1);
    this.player = this.physics.add.sprite(400, 150, "player")
    this.cursors = this.input.keyboard.creatCursorKeys();
}


function update() {

}