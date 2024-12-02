function mostrar(){
 
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)

    let suma = numero1 + numero2

    document.getElementById('mensaje').innerText=`numero 1: ${numero1}\n numero 2: ${numero2} \n el resultado de la suma es: ${suma}`
    // document.write(`numero 2: ${numero1} `)
    // document.write(`la suma de los numeros es: ${suma} <br>`)

  

}