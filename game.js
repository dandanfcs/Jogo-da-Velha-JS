const player1 = "x";
const player2 = "o";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();
reset();

function atualizaMostrador(){
 
    if(gameOver){ 
        return;
    }

    if(playTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "./imagens/play1.png");
    }
    else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "./imagens/play2.png");
    }

}

function inicializarEspacos(){

    var espacos = document.getElementsByClassName("espaco");

    for( i = 0; i < espacos.length; i++){
        
        espacos[i].addEventListener('click', function(){
          
            if(gameOver){
                return;
            }
            if(this.getElementsByTagName("img").length == 0 ){
                if(playTime == player1){
                    this.innerHTML = "<img src='./imagens/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }
                else{
                    this.innerHTML = "<img src='./imagens/circle.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
            }
            atualizaMostrador();
            verificarGanhador();
        })
    }
}

function verificarGanhador(){
 
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    
    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencerdor = "";

    if( (a1 == a2 && a2 == a3 && a1 != '') ||
        (a1 == b1 && b1 == c1 && a1 != '') ||
         (a1 == b2 && b2 == c3 && a1 != '') ){
            if(a1 == 'x'){
                vencerdor = "Goku";
             }else{
                vencerdor = "Majin Boo";
            }
              alert( vencerdor + " é o Ganhador!");
    }
    else if( (b2 == a2 && b2 == c2 && b2 != '') || 
             (b2 == a3 && b2 == c1 && b2 != '') || 
             (b2 == b1 && b2 == b3 && b2 != '') ){
                if(a1 == 'x'){
                    vencerdor = "Goku";
                }else{
                    vencerdor = "Majin Boo";
                }
                alert( vencerdor + " é o Ganhador!");
             }
     else if( ( c3 == b3 && c3 == a3 && c3 != '') ||
               (c3 == c2 && c3 == c1 && c != '') ){

                 if(a1 == 'x'){
                     vencerdor = "Goku";
                 }else{
                     vencerdor = "Majin Boo";
                 }

                alert( vencerdor + " é o Ganhador!");
               }

}

function reset(){
    var btn = document.getElementById("btn-reset");
    btn.addEventListener("click", function(){
         document.location.reload(true);
    })
}



