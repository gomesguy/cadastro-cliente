'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient ={
    nome: 'Lucas',
    diagnostico : 'autismo',
    celular: "21965566565",
    instituição: 'afac'

}

//CRUD -- create update update delete 

const createClient = () => {

}

    //Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

