function q(){
    var nome = $('#nome').val()
    var senha = $('#senha').val()

    if(nome && senha && nome === "admin" && senha === "admin"){
        const user = {
            name:nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        };

        localStorage.setItem('usuario', JSON.stringify(user))
        window.location.href = '..//index.html'
    }else{
        document.getElementById('error-modal').style.display = 'flex'
        document.getElementById('nome').style.borderBottom = '3px solid red'
        document.getElementById('senha').style.borderBottom = '3px solid red'
    }
}

function fecharError(){
        document.getElementById('error-modal').style.display = 'none'
        document.getElementById('nome').style.borderBottom = '2px solid #090909'
        document.getElementById('senha').style.borderBottom = '2px solid #090909'
}