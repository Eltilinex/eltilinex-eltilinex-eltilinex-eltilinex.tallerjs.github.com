

function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value

    edad=parseFloat(edad)


    if (edad > 0)
      if (edad > 18)
        // alert(`su nombre es: ${nombre} y su edad es: ${edad}`)
     //console.log(`su nombre es: ${nombre} y su edad es: ${edad}`)
     
     document.getElementById('mensaje').innerText = `Nombre: ${nombre}\n Edad : ${edad}`
    else 
     document.getElementById('mensaje').innerText = ''
}
