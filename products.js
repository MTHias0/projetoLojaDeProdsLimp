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

} validSenha = () => {
    var tamanhoSenha = document.getElementById('senha')
    var confirmSenha = document.getElementById('senha2')
    if (tamanhoSenha.length < 8) {

        return alert('Senha inválida')

    } if (tamanhoSenha != confirmSenha) {

        return alert('Senha inválida')

    } else {

        return alert('Conta criada')

    }

}

checkBox = () => {
    var check = document.getElementById('box');
    if (check.checkend) {
        return alert('Conta crianda')
    } else {
        return alert('Não aceitamos robôs!')
    }

}

validEmail = () => {
    var email = document.getElementById('email')
    var exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check = /@[w-]+./;
    var checkend = /.[a-zA-Z]{2,3}$/;

    if (((email.search(exclude) != -1) || (email.search(check)) == -1) || (email.search(checkend) == -1)) {
        return alert('E-mail inválido');
    } else {
        return alert('Conta criada')
    }

}


