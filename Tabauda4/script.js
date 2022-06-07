function gerar(){
  
  var valor = document.getElementById('txtn')
  var res = document.getElementById('res')
  var tab = document.getElementById('seltab')


  if(valor.value.length == 0){
    window.alert('Colocar um valor')
  }
  else {
    var numero = Number(valor.value)
    tab.innerHTML = ''
    for(var i = 1; i <= 10; i++){
      var multiplacação = numero * i
      let item = document.createElement('option')   
      item.text = `${numero} X ${i} = ${multiplacação}`
      tab.appendChild(item)     
    } 
  }  
}