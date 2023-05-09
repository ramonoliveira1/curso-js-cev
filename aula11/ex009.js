var pais = window.document.getElementById("pais").value
var a = window.document.getElementById('res')

function verificar(){
    if(pais == 'brasil'){
        a.innerHTML = 'Brasileiro'
    }else{
        a.innerHTML = 'Gringo'
    }
    console.log(pais)
}