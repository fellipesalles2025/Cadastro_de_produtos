const btnCadastro = document.querySelector('#btn-cadastrar')

const formulario = document.querySelector('#my-form')

const fields = Array.from(document.querySelectorAll('.field'))

const message = document.querySelector('#msg')


btnCadastro.addEventListener('click', (event) => {

    event.preventDefault(event);

    const isEmpty = fields.some(field => field.value.trim() === '')

    if(isEmpty){

        message.textContent = 'Preencha os campos marcados em vermelho'

        message.classList.add('error')

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        setTimeout(() => {

            message.textContent = ''

            message.classList.remove('error')

        }, 3000)

        fields.forEach((field) => {

            if(field.value === '') {

                field.style.border = '2px solid red'

                setTimeout(() => {

                    field.style.border = '2px solid #181717'

                }, 3000)
            } 
        })
    } else {
            const codigo = document.querySelector('#code').value
            const descricao = document.querySelector('#desc').value
            const marca = document.querySelector('#marca').value
            const categoria = document.querySelector('#cat').value

            const precoField = document.querySelector('#price')
            const precoStr = precoField.value.replace(',', '.')
            const preco = parseFloat(precoStr)

            const quantField = document.querySelector('#qtde')
            const quantidade = parseInt(quantField.value)


            if(!isNaN(preco) && !isNaN(quantidade)){

                const product = {
                    codigo: codigo,
                    descricao: descricao,
                    marca: marca,
                    categoria: categoria,
                    preco: preco,
                    quantidade: quantidade
                }

                formulario.reset();

                fetch('http://localhost:8080/produtos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // sempre JSON
                    },
                    body: JSON.stringify(product)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        message.textContent = 'Cadastro realizado com sucesso'

                        message.classList.add('success')

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                        
                        setTimeout(() => {
                            window.location.href = './index.html';
                        }, 2000);
                    });

            } else {

                if(isNaN(preco)){

                    message.textContent = 'Entrada inválida, insira um valor numérico'

                    message.classList.add('error')

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })

                    precoField.style.border = '2px solid red'

                    setTimeout(() => {

                        message.textContent = ''

                        message.classList.remove('error')

                        precoField.style.border = '2px solid #181717'

                    }, 3000)
                }

                if(isNaN(quantidade)){
                    
                    message.textContent = 'Entrada inválida, insira um valor numérico'

                    message.classList.add('error')

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })

                    quantField.style.border = '2px solid red'

                    setTimeout(() => {

                        message.textContent = ''

                        message.classList.remove('error')

                        quantField.style.border = '2px solid #181717'

                    }, 3000)
                }
            }
        }
})



