function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 
var data = new Date() 
var hora = data.getHours()
 var hora = 21
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'images/sun.png'
    document.body.style.background = '#FFC13D'
}else if(hora >= 12 && hora < 18){
    img.src =  'images/tarde.png'
    document.body.style.background = '#0081DA'
}else{
    img.src = 'images/moon.png'
    document.body.style.background = '#6900DF'
}

}