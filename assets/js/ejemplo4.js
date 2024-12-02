function mostrar(){
    let numero = document.getElementById('numero').value
    numero = parseFloat(numero)

    if(numero >= 0 )
     document.getElementById('mensaje').innerText=`Valor absoluto de: ${numero} es: ${numero} `
    else 
    document.getElementById('mensaje').innerText=`el valor absoluto del numero ${numero} es: ${numero*-1} `

}                                           
