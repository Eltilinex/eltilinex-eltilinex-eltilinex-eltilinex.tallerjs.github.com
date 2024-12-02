
function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    let sexo = document.getElementById('sexo').value
    edad=parseFloat(edad)

if (edad > 0)
    if (edad >= 18 & sexo == 1 )

        // alert(`su nombre es: ${nombre} y su edad es: ${edad}`)
     //console.log(`su nombre es: ${nombre} y su edad es: ${edad}`)
     document.getElementById('mensaje').innerText=`Nombre: ${nombre}\nEdad: ${edad}\n Sexo: Masculino`
    else
        document.getElementById('mensaje').innerText=''
}