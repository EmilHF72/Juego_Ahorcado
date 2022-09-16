
//----------------Script para HTML  Ahorcado ----------------//
function iniciarjuego(){
    document.getElementById().style.display = "none";
}


var cuentafallo =0;
var cuentaCorrecto =0;
const totalmalas=[];


String.prototype.replaceAt= function(index, Caracter){
    return this.substr(0,index) + Caracter + this.substr(index+Caracter.length);
}
const palabras =["Perro","Hola","casa", "patio"];

const palabraL = palabras[Math.floor(Math.random()* palabras.length)];
var guiones = palabraL.replace(/./g, "_ "); 

//console.log(palabra + " con" + guiones)
document.querySelector("#salida").innerHTML = guiones;
document.querySelector('#calcular').addEventListener('click', ()=> {
    const letraL = document.querySelector("#letra").value;
    //alert(palabra)
    letra = letraL.toUpperCase();
    palabra = palabraL.toUpperCase();

    let fallado = true;

    for (var i in palabra){
        if(letra == palabra[i]){
            guiones = guiones.replaceAt(i*2, letra);
            //alert (guiones)
            fallado = false;
            cuentaCorrecto++;
        }
    }

   if (fallado){
       cuentafallo++;
       if (cuentafallo < 7){ 
            console.log(cuentafallo)
                              
            if (totalmalas == ""){
                totalmalas.push(letra);
                console.log("entre vacio")
                document.querySelector("#malas").innerHTML = totalmalas; 
                //console.log(totalmalas);
                  
            } else{
                console.log("sali vacio");
                totalmalas.push(letra);
                document.querySelector("#malas").innerHTML = totalmalas.join(" ");
                for(var i =0; i < totalmalas.length -1 ;i++){
                    if (totalmalas[i] == letra){
                        alert ("ya la escribistie");
                        totalmalas.pop();
                        document.querySelector("#malas").innerHTML = totalmalas.join(" ");
                        cuentafallo--;
                        console.log(cuentafallo);
                    }
                }
            }
        var foto =document.getElementById("imagen");
        foto.src = 'img/elahoracado0'+ cuentafallo +'.jpg';


        }else{
            /*alert ("has Fallado" + "la palabra era " + palabraL.toUpperCase());*/
            document.getElementById("valor").innerHTML=palabraL.toUpperCase();
            abrir_Modal_perder();
        }
    
    }else{
        if(guiones.indexOf("_")=== -1){
            
            abrir_Modal_Ganar();
        }
    }

    document.querySelector("#salida").innerHTML = guiones;
    document.querySelector("#letra").value = "";
    document.querySelector("#letra").focus();
});

const Ventana_Modal = document.querySelector(".Ventana_Modal");
function abrir_Modal_Ganar(){
    Ventana_Modal.classList.add("Ventana_Modal--show");
}

const Ventana_Modal_mal = document.querySelector(".Ventana_Modal_mal");
function abrir_Modal_perder(){
    Ventana_Modal_mal.classList.add("Ventana_Modal_mal--show");
}


