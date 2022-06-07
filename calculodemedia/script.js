function gerar(){
  
  var nota1 = document.getElementById('txtnota1')
  var nota2 = document.getElementById('txtnota2')
  var nota3 = document.getElementById('txtnota3')
  var prova = document.getElementById('txtav')
  var res = document.getElementById('res')

  
  if (nota1.value > 10 || nota2.value > 10 || nota3.value > 10 || prova.value>10 ){
    window.alert('VALOR INSERIDO MAIOR QUE O ESPECIFICADO')
  }  

  else {
     
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let p1 = Number(prova.value)

    let mediaDasAtividades = (n1+n2+n3)/3
    
    let mediaFinaldasatividades = mediaDasAtividades*0.3

    let mediaprova = p1 * 0.7

    var mediafinal = mediaprova + mediaFinaldasatividades

    res.innerHTML = `A media final das atividades foi de <strong>${mediaDasAtividades.toFixed(1)}</strong>, a sua nota na prova foi <strong>${p1.toFixed(1)}</strong>,
    sua media final foi de <strong>${mediafinal.toFixed(1)}</strong> </br>`  
    res.style.textAlign = 'justify'

    if (mediafinal >= 7){
      res.innerHTML += `<font color = 'blue'><strong>APROVADO</strong></font>`
      }
    else if (mediafinal <7 && mediafinal>=5){
      res.innerHTML += `<font color = 'orange'><strong>RECUPERAÇÃO</strong></font></br>`
      res.innerHTML += 'Nota da Recuperação: '
      var item = document.createElement('input')
      res.appendChild(item)  
    
      let but = document.createElement('input')
      but.setAttribute('type', "button")
      but.setAttribute('value', "CALCULAR")
      but.addEventListener('click', soma)
      res.appendChild(but)  
      but.style.width = '100px'
      
      function soma() {
        
        res.innerHTML =''
        let recurepação = Number(item.value)
        let mediarecureparacao = (mediafinal+recurepação)/2
        
        if(item.value > 10){
          window.alert('VALOR INVALIDO')
        }
        else if (mediarecureparacao >= 7){
          res.innerHTML += `Apos a recuperação o aluno ficou com uma nota <font color = 'blue'><strong>${mediarecureparacao.toFixed(1)}</strong></font> e foi <font color = 'blue'><strong>APROVADO</strong></font>`
        }
        else {
          res.innerHTML += `Apos a recuperação o aluno ficou com uma nota <font color = 'red'><strong>${mediarecureparacao.toFixed(1)}</strong></font> e foi <font color = 'red'><strong>REPROVADO</strong></font>`
        }
        return res
      }
    }

    

    else {
      res.innerHTML += `<font color = 'red'><strong>REPROVADO</strong></font>`
    }
  }
}