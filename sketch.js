var carro1, carroImg;
var cone1, coneImg;

function preload(){
carro1 = loadAnimation ("carro jogo.png")
cone1 = loadAnimation ("cone.png");
}

function setup() {                                          //professora meu jogo nn carrega oque eu faço
    createCanvas (600,400);

    carro1 = createSprite(50,350,20,20);
    carro1.addImage(carroImg);
    carro1.scale = 0.2;

    cone = createSprite(550,350,20,20);
    cone.addImage(coneImg);
    cone.scale = 0.2;
    
}

function draw() {

    background("black");
    textSize(15)
    text("desviando do cone",50,30);

    drawSprite();
 
}