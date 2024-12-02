function mostrar(){
 
    let numero1 = document.getElementById('numero1').value

    numero1 = parseFloat(numero1)
    

    let porcentaje = numero1 * 0.05;

    document.getElementById('mensaje').innerText=`numero 1: ${numero1} \n el 5% del numero ingresado es:${porcentaje}`

   
}