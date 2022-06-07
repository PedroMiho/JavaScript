function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var fundo = document.getElementById('fundo')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()



    msg.innerHTML = `<h1>Agora são ${hora}h${minutos}</h1>`



    if(hora > 0 && hora <12){
      img.src = 'manha.png'
      fundo.style.background = 'yellow'  
    }
    else if (hora >12 && hora <18){
      img.src = 'tarde.png' 
      img.style.borderRadius = '50px'
      fundo.style.background = 'blue'
    
    }
    else{
      img.src = 'noite.png'
      img.style.borderRadius = '50px'
      fundo.style.background = 'black' 
    }
     

}