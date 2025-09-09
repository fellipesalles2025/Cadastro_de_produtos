const btnCadastro = document.querySelector('#btn-cadastrar')

const productList = document.querySelector('#pr-list')

const errorMessage = document.querySelector('#msg')


btnCadastro.addEventListener('click', (event) => {

    event.preventDefault(event);


    const codigo = document.querySelector('#code')
    const descricao = document.querySelector('#desc')
    const categoria = document.querySelector('#cat')
    const preco = document.querySelector('#price')
    const quantidade = document.querySelector('#qtde')

    if(codigo.value === ''){
        
        codigo.style.border = '2px solid red'


        setTimeout(() => {

            codigo.style.border = '2px solid #181717'

            }, 3000)
    } else {

        
        const product = {
            code: codigo.value,
            description: descricao.value,
            category: categoria.value,
            price: preco.value,
            quantity: quantidade.value
        }
        
        const {code, description, category, price, quantity} = product

        console.log(code)
    }

})



