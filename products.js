const itens = [
    {
        cod: 0,
        nome: 'Detergente',
        img: '../Image/image2.jpg',
        quantidade: 0,
        imagePreco: "R$2,50 L ",
        preco: 2.50
    },
    {
        cod: 1,
        nome: 'Desinfetante',
        img: '../Image/image2.jpg',
        quantidade: 0,
        imagePreco: "R$2,50 L ",
        preco: 2.50
    },
    {
        cod: 2,
        nome: 'Cloro',
        img: '../Image/image2.jpg',
        quantidade: 0,
        imagePreco: "R$2,50 L",
        preco: 2.50
    },
    {
        cod: 3,
        nome: 'Água Sanitária',
        img: '../Image/image2.jpg',
        quantidade: 0,
        imagePreco: "R$2,50 L ",
        preco: 2.50
    },
]


IniciaProdutos = () => {

    var contemItens = document.getElementById('produtos')
    itens.map((valor) => {
        contemItens.innerHTML += `

            <div class = "produto-unico">
                <img src="`+ valor.img + `" />
                <p> `+ valor.nome + `</p>
                <p> `+ valor.imagePreco + `</p>
                <a key ="`+ valor.cod + `" href="">Adicionar ao carrinho!</a>
                
            </div>
        
        `;

    })

}


IniciaProdutos();


adicionaCarrinho = () => {
    event.preventDefault()
    var contemCarrinho = document.getElementById('produtos')
    contemCarrinho.innerHTML = "";
    itens.map((valor) => {

        if (valor.quantidade > 0) {

            contemCarrinho.innerHTML += `
            <div class="check-no-carrinho">
            <a href ="`+index.html+`"
            <p>Produto: `+ valor.nome + ` </p>
            <p>Quantidade: `+ valor.quantidade + `</P>
            <div clear:both"></div>
            </div>
        `;
        }
    })

}

var links = document.getElementsByTagName('a');


for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function () {
        let key = this.getAttribute('Key');
        itens[key].quantidade++;
        adicionaCarrinho();


    })

}