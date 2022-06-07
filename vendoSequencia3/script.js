function contar(){

  var inicio = document.getElementById('txtinicio')
  var condicao = document.getElementById('txtcond')
  var passo = document.getElementById('txtincremento')
  var res = document.getElementById('res')
  
  if (inicio.value.length == 0 || condicao.value.length == 0 || passo.value.length == 0){
    res.innerHTML = `Impossivel contar`
  } 
  else{
    res.innerHTML = 'Contando: </br>'

    let i = Number(inicio.value)
    let c = Number(condicao.value)
    let p = Number(passo.value)

    if (p == 0 && i < c){
      window.alert('IMPOSSIVEL CONTAR COM 0, IREMOS FAZER COM PASSO 1')
      p = 1
      for (let n = i; c >= n; n += p){
        res.innerHTML += ` \u{1F449} ${n}`
      }    
    }

    else if (p == 0 && i > c){
      window.alert('IMPOSSIVEL CONTAR COM 0, IREMOS FAZER COM PASSO 1')
      p = 1
      for (let n = i; n >= c; n -= p){
        res.innerHTML += ` \u{1F449} ${n}`
      }
    }

    else if (i < c){
      for (let n = i; c >= n; n += p){
       res.innerHTML += ` \u{1F449} ${n}`
      }
    }

    else{
      for (let n = i; n >= c; n -= p){
        res.innerHTML += ` \u{1F449} ${n}`
       }
    }
  
  }

  res.innerHTML += ' \u{1F3F4}'
}