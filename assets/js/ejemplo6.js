function mostrar(){
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value 
    numero1=parseFloat(numero1)
    numero2 = parseFloat(numero2)


    let positivos = 'los numero positivos son: ↓ ';


  if (numero1>0 )
    
    // document.write(`los numero positivos son: ${numero1}` )
    positivos+= '\n ' + numero1 + '\n ';
  

   if (numero2>0) 
    // document.write(`los numeros postivos son: ${numero2}`)
    positivos+= numero2 + '\n ';
   
   
  document.getElementById('mensaje').innerText=positivos 

}