function calcular() {
    let estrato = parseInt(document.getElementById('estrato').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let longitud = parseFloat(document.getElementById('longitud').value);
    let ancho = parseFloat(document.getElementById('ancho').value);
    
    
    if (isNaN(estrato) || isNaN(altura) || isNaN(longitud) || isNaN(ancho) || estrato <= 0 || altura <= 0 || longitud <= 0 || ancho <= 0) {
        alert('no ha escrito nada o hay numeros negativos, escriba algo bien');
        return;
    }

    
    let volumen = altura * longitud * ancho;
    let costo = volumen * estrato;
    
   
    document.getElementById('mensaje').innerText = `Consumo de agua: ${volumen} m³\n Su costo es de :$${costo}`

}
