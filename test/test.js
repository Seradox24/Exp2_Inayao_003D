console.log("funcionando");

const formulario = document.querySelector('#formulariojs')

formulario.addEventListener('submit', (e) => {
    console.log('me diste click')
    e.preventDefault()
})