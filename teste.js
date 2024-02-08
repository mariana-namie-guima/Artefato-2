var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity:{y:0},
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game  = new Phaser.Game(config);

var player;

function preload(){
    this.load.image('bg', 'assets/testeBg.png')
    this.load.image('player', 'assets/gato.png')

}

function create(){
    this.add.image(0, 0, 'bg').setOrigin(0,0);
    this.add.image(300, 200, 'player').setScale(0.01);
    this.player = this.physics.add.sprite(400, 150, "player")
    this.cursors = this.input.keyboard.createCursorKeys();
}


function update() {
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);
    if(this.cursors.left.isDown){
        console.log("esquerda");
        this.player.setVelocityX(-100);
    }else if (this.cursors.right.isDown){
        console.log("direita");
        this.player.setVelocityX(100);
    }else if (this.cursors.up.isDown){
        console.log("cima");
        this.player.setVelocityY(-100);
    }else if (this.cursors.down.isDown){
        console.log("baixo");
        this.player.setVelocityY(100);
    }
}