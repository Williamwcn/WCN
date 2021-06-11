function carregar() { 
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom DIA!
        img.src = 'imagemmanha.png'
        document.body.style.background = '#0168B2'        
    } else if (hora >= 12 && hora <= 18) {
        // Boa TARDE!
        img.src = 'imagemtarde.png'
        document.body.style.background = '#FF9E19'
    } else {
        // Boa NOITE!
        img.src = 'imagemnoite.png'
        document.body.style.background = '#2B4F66'
    }
}
