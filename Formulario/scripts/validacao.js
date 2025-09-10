const btnCadastro = document.querySelector('#btn-cadastrar')

const productList = document.querySelector('#pr-list')

const errorMessage = document.querySelector('#msg')


btnCadastro.addEventListener('click', (event) => {

    event.preventDefault(event);


    const codigo = document.querySelector('#code')
    const descricao = document.querySelector('#desc')
    const marca = document.querySelector('#marca')
    const categoria = document.querySelector('#cat')
    const preco = document.querySelector('#price')
    const quantidade = document.querySelector('#qtde')

    if(codigo.value === ''){
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        codigo.style.border = '2px solid red'

        setTimeout(() => {

            codigo.style.border = '2px solid #181717'

            }, 3000)

    } else {
        
        const product = {
            codigo: codigo.value, 
            descricao: descricao.value,  
            marca: marca.value,    
            categoria: categoria.value,
            preco: preco.value,    
            quantidade: quantidade.value 
        }
        
        const { codigo: c, descricao: d, marca: m, categoria: cat, preco: p, quantidade: q } = product;

    }

})



