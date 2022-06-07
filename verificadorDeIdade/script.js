function verificar(){

  var data = new Date()
  var ano = data.getFullYear()

  var fano = document.getElementById('ano')
  var res = document.getElementById('res')
  


  if(fano.value.length == 0 || Number(fano.value) > ano || fano.value < 1900 || fano.value.length == NaN){
    window.alert('VERIFIQUE O ANO E TENTE NOVAMENTE')
  }  
  else {
    var radsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
  }

  if (radsex[0].checked){
    genero = 'um Homem'

    if(idade >= 0 && idade <=12 ){
      //criança
      img.setAttribute('src', 'crianca_H.jpg')
    } 
    else if (idade >12 && idade <= 22){
      //jovem
      img.setAttribute("src", 'jovem_H.jpg')
    }
    else if (idade>22 && idade<=55){
      //adulto
      img.setAttribute("src", 'adulto_H.jpg')
    }
    else {
      //Idoso
      img.setAttribute("src" , 'idoso_H.jpg')
    } 
  
    
  }
  else if (radsex[1].checked) {
    genero = 'uma Mulher'
    if(idade >= 0 && idade <=12 ){
      //criança
      img.setAttribute("src", 'crianca_M.jpg')
    } 
    else if (idade >12 && idade <= 22){
      //jovem
      img.setAttribute("src", 'jovem_M.jpg')
    }
    else if (idade>22 && idade<=55){
      //adulto
      img.setAttribute("src", 'adulta_M.jpg')

    }
    else {
      //Idoso
      img.setAttribute("src", 'idosa_M.jpg')

    } 
  }

  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${genero} com ${idade} anos </br> </br>`
  res.appendChild(img)
 


}