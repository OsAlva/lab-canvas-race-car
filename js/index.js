//cuando se carga la pagina
window.onload = () => {
  //el boton star-button cuando haga onclick ejecutara start game
  document.getElementById('start-button').onclick = () => {
    startGame();

    // const botonInicio = document.getElementById('star-button');
    // botonInicio.addEventListener('click',()=>{
    //   startGame();
    // }); esto de arriba es equivalente

    //keydown es un evento de teclado entonces ponemos .body o windows tambien valdria.
    document.body.addEventListener("keydown",(e)=>{
      if(e.key== "ArrowLeft") {
        //x_coche -= 25;
        if(x_coche> 0){
          x_coche -= 10;

          //otra opcion
          // x_coche -= 10;
          // if(x_coche < 0) x_coche = 0;

        }
      }
      else if(e.key =="ArrowRight") {
        //x_coche += 25;
        if(x_coche<canvas.width-60){
          x_coche +=10;

        //otra opcion
        // if(x_coche < canvas.getAttribute("width")-60) x_coche = canvas.getAttribute("width")- 60);
        }
      }


    })
    

  };


  const canvas =  document.getElementById("canvas"); 
  const ctx  = canvas.getContext("2d");

  //fondo creamos
  const imgFondo = document.createElement("img");
  imgFondo.setAttribute("src","images/road.png");
  //otra manera 
  //imgFondo.src = "images/road.png";

  //coche fondo
  const imgCar = document.createElement("img");
  imgCar.setAttribute("src", "images/car2.png");
  let x_coche = (canvas.getAttribute("width")-60)/2;

  //creamos un array de obstaculos donde almacenaremos los obstaculos enter otras cosas
  const obstaculos= [];

  //puntuacion
  let myScore;

  
  

  //obstaculo
  // let width_max_obstaculo = canvas.getAttribute("width")-150;
  //let width_obstaculo = Math.floor(Math.random() * width_max_obstaculo);
  //let x_obstaculo = Math.floor(Math.random()*(canvas.getAttribute("width")-width_obstaculo));
  //let y_obstaculo = -20;
  let frames = 0;


  let interval 
  function startGame() {
      //ponemos la instacia score
      //myScore = new Obstaculo();

      //para printar un juetgo ponemos un setInterval
      return  interval = setInterval(update, 20); //set interval al que le pasamos la funcion 'update';
      

  }

  //creamos la funcion update
  function update(){
    frames ++;

    //1.limpiar
    ctx.clearRect(0,0, canvas.getAttribute("width"),canvas.getAttribute("height"));
    

    
    //2.RECALCULAR
      //posición obstaculos
      //para variar la y del obstaculo
  //  y_obstaculo +=10;

      //recorerr array de obstaculos y recalcular  "y"
      obstaculos.forEach(obstaculo=>{
        obstaculo.y +=4;
        //comprobamos si obstaculo ha chocado con el coche

      })

      if((frames % 200 ==0)){
        //crear obstaculo
        let obstaculo = new Obstaculo();
        obstaculos.push(obstaculo);
        
      }

      //comprobar colicsiones
      obstaculos.forEach(obstaculo =>{
        obstaculo.choca();
      });


    //3.repintar
      //repintamos
      // fondo
      //ctx.drawImage(imgFondo,0,0,500,700);
      //equivalente
      ctx.drawImage(imgFondo,0,0,canvas.getAttribute("width"),canvas.getAttribute("height"));
      // coche
      ctx.drawImage(imgCar,x_coche,550,60,125);
      //obstaculos
      //recorrer array de obstaculos y pintar cada uno.
      //printamos un rectangulo
      // ctx.fillRect(x,y,w,h)
      obstaculos.forEach(obstaculo => {
       // ctx.fillRect(obstaculo.x,obstaculo.y,obstaculo.width,obstaculo.height);
       obstaculo.pintar();
      })
      
      
  }

  class Obstaculo{
    constructor(){
    let width_max_obstaculo = canvas.getAttribute("width")-150;

    this.width= Math.floor(Math.random() * width_max_obstaculo);
    this.height = 30;
    this.x=Math.floor(Math.random()*(canvas.getAttribute("width")-this.width));;
    this.y= -30;
    }

    pintar(){
      ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    choca(){
      if(!((this.y< 550) || ((this.y- this.width)> 550) || (this.x > (x_coche + 60)) || ((this.x + this.width) < x_coche))){
        clearInterval(interval); 
      }
      
    
          //y1= obstaculo
          // y2 = coche
    // 
  //   if((y1 < y2)     || 
  //   ((y1 - h1) > y2) ||
  //    (x1 > (x2 + w2)) ||
  //   ((x1 + w1) < x2)
  // ){
  // //Is not colliding!
  // }
  // else{
  // //Is colliding!
  // }
 //ctx.drawImage(imgCar,x_coche, y_coche = 550,coche_weight= 60, coche_height=125);



  
    //     }
    }


  }



};
