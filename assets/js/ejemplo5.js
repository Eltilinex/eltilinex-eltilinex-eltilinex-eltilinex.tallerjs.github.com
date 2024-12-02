function mostrar(){
    let numero = document.getElementById('numero').value
    numero= parseFloat(numero)

    if ( numero <0 )
        document.getElementById('mensaje').innerText=`El Numero ${numero} tiene una Raiz Imaginaria`
    else
    document.getElementById('mensaje').innerText=`La raiz del numero ${numero} es: ${Math.sqrt(numero,2)}`
 }