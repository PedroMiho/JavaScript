let atividade = document.getElementById("txtatividade")
let listaAt = document.getElementById("listaAt")
let valoresAt = []
let prova = document.getElementById("txtprova")
let listaPr = document.getElementById("listaPr")
let valoresPr = []
let res = document.getElementById('res')

let posAt = 0
let posPr = 0


function IsNumber (n){
  if(Number(n)>= 0 && Number(n)<= 10){
    return true
  }
  else{
    return false
  }
}

function atividade1(){
  if(atividade.value.length == 0){
    window.alert('Erro reveja os valores')
  }
  else if(IsNumber(atividade.value)){
    valoresAt.push(Number(atividade.value))
    posAt += 1
    let item = document.createElement('option')
    item.text= `Na atividade ${posAt} teve nota ${atividade.value}`
    listaAt.appendChild(item)

  } else{
    window.alert('Erro reveja os valores')
  }
  atividade.value = ''
  atividade.focus()
}

function prova1(){
  if(prova.value.length == 0){
    window.alert('Erro reveja os valores')
  }
  else if(IsNumber(prova.value)){
    valoresPr.push(Number(prova.value))
    posPr += 1
    let item1 = document.createElement('option')
    item1.text= `Na prova ${posPr} teve nota ${prova.value}`
    listaPr.appendChild(item1)

  } else{
    window.alert('Erro reveja os valores')
  }
  prova.value = ''
  prova.focus()
}

function calcular(){

  if(valoresAt.length == 0 || valoresPr.length == 0){
    window.alert('Inserir valor')
  }
  else {
    res.innerHTML = ''
    var soma = 0
    let tot = valoresAt.length 

    for(var i = 0; i<tot; i++){
      soma += valoresAt[i]
    }

    let mediaAt = soma/tot
    res.innerHTML += `A media da atividades foram ${mediaAt.toFixed(2)} <br>`
  
    let somaPr = 0
    let tot1 = valoresPr.length 
  
    for(var j = 0; j<tot1; j++){
      somaPr += valoresPr[j]
    }
    let mediaPr = somaPr/tot1
    let mediaFinal = (mediaAt*0.3) + (mediaPr*0.7)

    res.innerHTML += `A media das provas foi ${mediaPr.toFixed(2)} <br>`     

    res.innerHTML += `A media final foi ${mediaFinal.toFixed(2)} <br>`   
    
    if(mediaFinal >= 7){
      res.innerHTML += `<font color = 'blue'><strong>APROVADO</strong></font>`
    }

    
    else if (mediaFinal >= 3 && mediaFinal < 7){
      res.innerHTML += `<font color = 'yellow'><strong>RECUPERAÇÃO</strong></font> <br> Nota da recuperação: `

      var item =document.createElement('input')
      item.setAttribute('id' , 'txtRecuperacao')
      res.appendChild(item)

      let botao = document.createElement("input")
      botao.setAttribute('type' , 'button')
      botao.setAttribute('value' , 'CALCULAR')
      botao.addEventListener('click' , calcular)
      res.appendChild(botao)


      
      function calcular(){
        let recuperacao = document.getElementById("txtRecuperacao")
        let rec = Number(recuperacao.value)
        let mediaRec = (rec + mediaFinal)/2

        if(txtRecuperacao.value.length == 0){
          window.alert('Erro reveja os valores')
        }
        else{  
          if(mediaRec >= 7){
          res.innerHTML += `<font color = 'blue'><strong>APROVADO</strong></font>, com ${mediaRec.toFixed(2)} de media`
          }
          else{
            res.innerHTML += `<font color = 'red'><strong>REPROVADO</strong></font>, com ${mediaRec.toFixed(2)} de media`
          }
        }  
      }
    }

    else {
      res.innerHTML += `<font color = 'red'><strong>REPROVADO</strong></font>   `
    }
  }
}

function excluir(){
  location.reload()
}