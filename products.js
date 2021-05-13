const itens = [
    {
        cod: 0,
        nome: 'Detergente',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$2,50 L"
    },
    {
        cod: 1,
        nome: 'Desinfetante',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$2,50 L "
    },
    {
        cod: 2,
        nome: 'Cloro',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$2,50 L"
    },
    {
        cod: 3,
        nome: 'Água Sanitária',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$2,50 L"
    },
    /*{
        cod: 4,
        nome: 'Sabonete Líquido(Mãos)',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$7,00 L"
    },
    {
        cod: 5,
        nome: 'Amaciante',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$3,00 L"
    },
    {
        cod: 6,
        nome: 'Sabão Líquido(Roupa)',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$5,00 L"
    },
    {
        cod: 7,
        nome: 'Xampu para carro',
        img: 'image2.jpg',
        quantidade: 0,
        preco: "R$5,00 L"
    },*/
]

IniciaProdutos = () => {

    var contemItens = document.getElementById('produtos')
    itens.map((valor) => {
        contemItens.innerHTML += `

            <div class = "produto-unico">
                <img src="`+ valor.img + `" />
                <p> `+ valor.nome + `</p>
                <p> `+valor.preco+`</p>
                <a key ="`+ valor.cod + `" href="">Adicionar ao carrinho!</a>
                
            </div>
        
        `;

    })

}


IniciaProdutos();


adicionaCarrinho = () => {
    event.preventDefault()
    var contemCarrinho = document.getElementById('carrinho')
    contemCarrinho.innerHTML = "carrinho";
    itens.map((valor) => {
        if (valor.quantidade > 0) {

            contemCarrinho.innerHTML += `
            <div class="check-no-carrinho">
            <p style ="float:left;">Produto: `+ valor.nome + ` </p>
            <p style ="float:right;">Quantidade: `+ valor.quantidade + `</P>
            <div style=clear:both"></div>
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