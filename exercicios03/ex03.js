function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'homem'

            if(idade>=0 && idade < 12){
                img.setAttribute('src', 'homembebe.png')
            }else if(idade < 25){
                img.setAttribute('src', 'homemJovem.png')
            }else if(idade < 65){
                img.setAttribute('src', 'homemAdulto.png')
            }else{
                img.setAttribute('src', 'homemIdoso.png')
            }
    
        }else if(fsex[1].checked){
            genero = 'mulher'

            if(idade>=0 && idade < 12){
                img.setAttribute('src', 'mulherBebe.png')
            }else if(idade < 25){
                img.setAttribute('src', 'mulherJovem.png')
            }else if(idade < 65){
                img.setAttribute('src', 'mulherAdulta.png')
            }else{
                img.setAttribute('src', 'mulherIdosa.png')
            }
    
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}