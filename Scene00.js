class Scene00 extends Phaser.Scene{
    constructor(){
        super({key: 'Scene00'});
    }

    create(){
        
        this.add.text(150, 250, "Seja bem vindo ao UniLevel!", {fill:'#000000', fontSize: '40px'});
        this.add.text(325, 325, "Clique para começar", {fill: '#000000', fontSize: '20px'});
        this.input.on('pointerdown',() => {
            this.scene.stop('Scene00'),
            this.scene.start('Scene01');
        })
    }
}

