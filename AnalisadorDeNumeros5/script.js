let num = document.getElementById("txtn")
let lista = document.getElementById("lista")
let res = document.getElementById('res')
let valores = []

function Isnumber(n){
  if(Number(n)>=1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function IsList(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
  return false  
  }  
}
function inserir(){

  if(Isnumber(num.value) && !IsList(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`,
    lista.appendChild(item)

  } else{
    window.alert('Valor incorreto')
  }
  num.value = ''
  num.focus()
}

function calcular(){

  if(valores.length == 0){
    window.alert('erro')
  } 
  else{

    let soma = 0;
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo todo temos ${tot} cadastrados </p> `


    for(var i = 0; i<tot; i++){
      soma += valores[i]
      if(valores[i]>maior)
      maior = valores[i]
      if(valores[i]<menor)
      menor = valores[i]
    }
  
    res.innerHTML += `<p>O maior numero encontrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor numero encontrado foi ${menor}</p>`
    res.innerHTML += `<p> A soma de todos os numeros cadastrados foi ${soma}</p> `
    var media = soma/tot
    res.innerHTML += `<p>A media de todos os numeros somados é ${media.toFixed(2)}</p>` 
  }
}
