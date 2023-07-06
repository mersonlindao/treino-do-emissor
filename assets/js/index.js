function cumprimento(){
    var data = new Date()
    var hora = data.getHours()
    var Cres = document.querySelector('#cumprimento-res')
    
    if (hora >= 6 && hora < 12){
        Cres.innerHTML = `Bom dia!`
    }else if(hora >= 12 && hora < 18){
        Cres.innerHTML = `Boa tarde!`
    }else if(hora >= 18 && hora <= 23){
        Cres.innerHTML = `Boa noite`
    }else{
        Cres.innerHTML = `Boa madrugada`
    }
}
