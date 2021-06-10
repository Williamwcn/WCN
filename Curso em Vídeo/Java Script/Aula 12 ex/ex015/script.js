function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imgmenino.png')
                //Crianca                
            } else if (idade < 21) {
                img.setAttribute('src', 'imggaroto.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'imgmoco.png')
                //Adulto
            } else {
                img.setAttribute('src', 'imgsenhor.png')
                //Idoso
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imgmenina.png')
                //Crianca
            } else if (idade < 21) {
                img.setAttribute('src', 'imggarota.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'imgmoca.png')
                //Adulto
            } else {
                img.setAttribute('src', 'imgsenhora.png')
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
        
}
