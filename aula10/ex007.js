var a = window.document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)

function clicar(){  
    a.innerText = 'Opa!'
    a.style.background = 'blue'
}

function entrar(){    
    a.innerText = 'entrou'
    a.style.background = 'orange'
}

function sair(){   
    a.innerText = 'Saiu'
    a.style.background = 'pink'
}

function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}