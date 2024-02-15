class Scene01 extends Phaser.Scene{
    constructor(){
        super({key: "Scene01"});
    }

    preload() {     //imagens que serao carregadas para serem usadas posteriormente
        this.load.image('bg', 'assets/testeBg.png')
        this.load.spritesheet('player', 'assets/spritesheet.png', {frameWidth: 500, frameHeight: 500})

    }

    create() {      //cria primeiro momento do jogo
        var player;
        this.add.image(0, 0, 'bg').setOrigin(0,0);      //adiciona background
        this.player = this.physics.add.sprite(400, 150, "player"). setScale(0.5);       //adiciona personagem
        this.cursors = this.input.keyboard.createCursorKeys();      //adiciona movimentacao pelas setas do teclado
        this.player.setCollideWorldBounds(true);

        this.anims.create({     //animação da posicao de costas do personagem
            key: "costas",      
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", {start: 0, end: 0}),      //a animacao comeca na sprite 0 (primeira imagem) e termina na 0
            reapeat: -1     // -1 significa que ele repete infinitamente
        });

        this.anims.create({     //animação da posicao de frente do personagem
            key: "frente",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", {start: 1, end: 1}),
            reapeat: -1
        });

        this.anims.create({     //animação da posicao do lado direito do personagem
            key: "lado",
            frameRate: 7,
            frames: this.anims.generateFrameNumbers("player", {start: 2, end: 2}),
            reapeat: -1
        });
    }

    update() {     //funciona como um loop
        this.player.setVelocityX(0);        //quando nenhuma tecla eh pressionada, o player para
        this.player.setVelocityY(0);
        if(this.cursors.left.isDown){       //movimenta para a esquerda quando a seta do teclado eh apertada
            console.log("esquerda");            
            this.player.anims.play("lado", true);
            this.player.setFlipX(true);     //inverte a sprite da posicao de lado do personagem
            this.player.setVelocityX(-100);
        }else if (this.cursors.right.isDown){       //movimenta para a direita
            console.log("direita");            
            this.player.anims.play("lado", true);
            this.player.setFlipX(false);
            this.player.setVelocityX(100);      
        }else if (this.cursors.up.isDown){      //movimenta para cima
            console.log("cima");
            this.player.anims.play("costas", true);
            this.player.setVelocityY(-100);
        }else if (this.cursors.down.isDown){        //movimenta para baixo
            console.log("baixo");
            this.player.anims.play("frente", true);
            this.player.setVelocityY(100);
        }
    }
};

