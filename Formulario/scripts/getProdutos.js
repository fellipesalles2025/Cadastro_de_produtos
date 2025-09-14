fetch('http://localhost:8080/produtos')
      .then(response => response.json()) // converte resposta para objeto JS
      .then(produtos => {
        const productList = document.querySelector('#pr-list');

        // Limpa lista antes de adicionar
        productList.innerHTML = '';

        // Cria um <li> para cada produto
        produtos.forEach(p => {
          const item = document.createElement('li');
          item.innerHTML = `<div>
                            <h2>${p.descricao}</h2>
                            <p>Código: ${p.codigo}</p>
                            <p>Marca: ${p.marca}</p>
                            <p>Categoria: ${p.categoria}</p>
                            <p>Preco: R$ ${p.preco}</p>
                            <p>Quantidade em estoque: ${p.quantidade}</p>
                        </div>`
          productList.appendChild(item);
        });
      })

const btnCadastrar = document.querySelector('#btn-cadastro')

const icon = document.querySelector('#icon-add')

btnCadastrar.addEventListener('mouseover', () => {
    icon.src = 'assets/plus_icon.svg'
})

btnCadastrar.addEventListener('mouseout', () => {
    icon.src = 'assets/plus_icon_white.svg'
})