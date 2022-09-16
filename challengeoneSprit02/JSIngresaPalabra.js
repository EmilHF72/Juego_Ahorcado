    // ---------------- funcion Lista para Agregar Palabras  --------------
    window.onload = function(){ //para generar variable global
        window.newPalabras=[];
    }
    
    function agregarPalabra(){
        let palabra = document.getElementById("textoin").value;
        newPalabras.push(palabra);

       let lista = document.getElementById("inPalabra");
       lista.innerHTML ="";
        limpiar();

        for(const aux of newPalabras){
            let etiquetaP = document.createElement('p');
            etiquetaP.innerText = aux;

            lista.appendChild(etiquetaP);
        }

        document.getElementById('cantidad').innerHTML = newPalabras.length;
        
        //console.log(newPalabras)
    }
    //----------------------------------------------------------------
    // ---------------- funcion limpiar --------------------------------

    function limpiar(){
        return document.getElementsByClassName("clear")[0].value="";
    }
    //----------------------------------------------------------------
    // ---------------- funcion Cancelar y regresar a index -----------

        function Cancelar(){
            newPalabras.splice(0,newPalabras.length);
            //console.log(newPalabras);
            window.location.href='index.html'
    }
    //----------------------------------------------------------------

