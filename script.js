let Original = document.querySelector("#textOriginal")
let Resultado = document.querySelector('#textResult')

const conversores = {

    maiuscula(texto){  
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            Resultado.innerHTML = texto.value.toUpperCase()
        }
    },

    minuscula(texto) {
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            Resultado.innerHTML = texto.value.toLowerCase()
        }
    },

    caracteres(texto){
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            let wordsSeparete = texto.value.split(" ")
            let noSpace = wordsSeparete.join("")
            Resultado.innerHTML = `O texto apresenta ${noSpace.length} caracteres` 
        }
    },

    noSpaces(texto){
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            let wordsSeparete = texto.value.split(" ")
            let noSpace = wordsSeparete.join("")
            Resultado.innerHTML = noSpace
        }
    },

    primeiraMaiuscula(texto){
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            let newText = texto.value.toLowerCase().replace(/(?:^|\s)\S/g, function(a){
                return a.toUpperCase()
            })
           Resultado.innerHTML = newText
        }
    },

    inverterTexto(texto) {
        if(texto.value === ""){
            alert("Preencha o texto a ser convertido")
        } else {
            var o = ""
            for(var c = texto.value.length -1; c >= 0; c--){
                o += texto.value[c]
            }
            Resultado.innerHTML = o
        }
    },
    
}


