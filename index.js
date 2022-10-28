// Função responsável por criar array de livros
function geraLivros() {
    objeto1 = {
        titulo: "O Pequeno Principe",
        anoDeLancamento: 1943,
        linkDoTitulo: "https://www.sesirs.org.br/sites/default/files/paragraph--files/o_pequeno_principe_-_antoine_de_saint-exupery.pdf",
        categorias: ["infantil", "filosofica", "poetica", "romantico"],
        imagemLivro: "https://m.media-amazon.com/images/I/51nNwwVSclL.jpg",
        virouFilme: true
    }
    
    objeto2 = {
        titulo: "After",
        anoDeLancamento: 2014,
        linkDoTitulo: "https://viveramfelizesparasempreblog.files.wordpress.com/2017/04/06-before-anna-todd.pdf",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/810FrINgfYS.jpg",
        virouFilme: true
    }
    
    objeto3 = {
        titulo: "O Hobbit ",
        anoDeLancamento: 1937,
        linkDoTitulo: "https://ddcus.org/pdf/summer_reading/10th_Grade/O%20Hobbit%20-%20J_%20R_%20R_%20Tolkien%20-%20BEAP%2010%20Portuguese.pdf",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/511+-lOOtsL._SX319_BO1,204,203,200_.jpg",
        virouFilme: true
    
    }
    
    objeto4 = {
        titulo: "Clean Code",
        anoDeLancamento: 2008,
        linkDoTitulo: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        virouFilme: false
    
    }
    
    objeto5 = {
        titulo: "É Assim que Acaba ",
        anoDeLancamento: 2008,
        linkDoTitulo: "https://visionvox.net/biblioteca/c/Colleen_Hoover_%C3%89_Assim_Que_Acaba.pdf",
        categorias:["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SY344_BO1,204,203,200_.jpg",
        virouFilme: false
    
    }
    
    objeto6 = {
        titulo: "O diário de Anne Frank ",
        anoDeLancamento: 1944,
        linkDoTitulo: "https://youtruth.weebly.com/uploads/1/3/1/8/1318459/o_diario_de_anne_frank_-portuguese.pdf",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/41+PZUZS7LL._SX346_BO1,204,203,200_.jpg",
        virouFilme: true
    
    }
    
    objeto7 = {
        titulo: "O homem mais rico da Babilônia ",
        anoDeLancamento: 1926,
        linkDoTitulo: "https://faroeditorial.com.br/site2020/wp-content/uploads/2017/04/Mini-livro-o-homem-mais-rico-.pdf",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/51cB4wSNxQL._SX333_BO1,204,203,200_.jpg",
        virouFilme: false
    
    }
    
    objeto8 = {
        titulo: "Mulheres que correm com os lobos ",
        anoDeLancamento: 1992,
        linkDoTitulo: "https://eduardolbm.files.wordpress.com/2014/10/mulheres-que-correm-com-os-lobos-clarissa-pinkola-estes.pdf",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41ogXvQ5WYL._SX341_BO1,204,203,200_.jpg",
        virouFilme: false
    
    }
    
    objeto9 = {
        titulo: "Os sete maridos de Evelyn Hugo ",
        anoDeLancamento: 2017,
        linkDoTitulo: "https://livrogratuitosja.com/wp-content/uploads/2022/08/Os-sete-maridos-de-Evelyn-Hugo-Taylor-Jenkins-Reid-Reid-Taylor-Jenkins-z-lib.org_.pdf",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41xVhz5sL1L._SX346_BO1,204,203,200_.jpg",
        virouFilme: true
    
    }

    const livros = []

    livros.push(objeto1)
    livros.push(objeto2)
    livros.push(objeto3)
    livros.push(objeto4)
    livros.push(objeto5)
    livros.push(objeto6)
    livros.push(objeto7)
    livros.push(objeto8)
    livros.push(objeto9)
    
    // Manipulando categorias - convertendo em string
    for (let livroObjeto of livros) {
        livroObjeto.categorias = livroObjeto.categorias.join(", ")
    }

    return livros
}

// Função responsável por listar livros na tela
function criaTela(livrosFiltrados) {
    for (let livroObjeto of livrosFiltrados) {
        const articleElement = document.getElementById("biblioteca")
        const sectionElement = document.createElement("section")
    
        const titulo = document.createElement("h1")
        titulo.setAttribute("class", "titulo")
    
        const linkW = document.createElement("a")
        linkW.setAttribute("href", livroObjeto.linkDoTitulo)
        linkW.setAttribute("target","_blank")
    
        linkW.innerHTML = `"${livroObjeto.titulo} 🔎"`
    
        const imagem = document.createElement("img")
        imagem.setAttribute("src", livroObjeto.imagemLivro)
        imagem.setAttribute("alt", livroObjeto.titulo)
        imagem.setAttribute("class", "livro-img")
    
        titulo.insertAdjacentElement('beforeend', linkW)
        
        const anoDeLancamento = document.createElement("p")
        anoDeLancamento.innerHTML = `Ano de Lançamento: ${livroObjeto.anoDeLancamento}`
    
        const categorias = document.createElement("p")
        categorias.innerHTML = `Categorias: ${livroObjeto.categorias}`
    
    
        articleElement.insertAdjacentElement('beforeend', sectionElement)
        sectionElement.insertAdjacentElement('beforeend', titulo)
        sectionElement.insertAdjacentElement('beforeend', imagem)
        sectionElement.insertAdjacentElement('beforeend', anoDeLancamento)
        sectionElement.insertAdjacentElement('beforeend', categorias)
    }
}

// Função responsável por filtrar lista de livros
function buscaLivro() { 
    const valorDoInput = document.getElementById("Livro")
    const filtro = valorDoInput.value
    
    
    const articleElement = document.getElementById("biblioteca")
    articleElement.innerHTML = ""

    const livrosFiltrados = []

    for (let LivroEscolhido of livros) {
        if (LivroEscolhido.titulo.toLocaleLowerCase() == filtro.toLocaleLowerCase()) {
            livrosFiltrados.push(LivroEscolhido)
        }
    }

    if(livrosFiltrados.length > 0) {
        criaTela(livrosFiltrados)
    } else if (filtro.length === "") {
        criaTela(livros)
    } else {
        alert("Livro não encontrado")
        criaTela(livros)
    }

   
}

// Função responsável por gerar relatório dos livros
function geraRelatorio() {
    console.log("Relatório: ")
    

    for(let livro of livros) {
        console.log(`
            Nome do livro: ${livro.titulo.toLocaleUpperCase()}
            Ano de lançamento do livro: ${livro.anoDeLancamento}
            Virou filme: ${livro.virouFilme}
            Categoria que ele se enquadra: ${livro.categorias}
        `);
    }
}



// Inicio do sistema
const livros = geraLivros();
criaTela(livros)
geraRelatorio()


function calculaAnos(){
   
    let soma = 0
    let media=0

    for(let i =0;i<livros.length;i++){ 
      soma+=livros[i].anoDeLancamento; 

    }
    media = soma/livros.length
    return media
}
console.log(`Media dos anos que os livros foram lançados : ${calculaAnos()}`)

// const mediaDosanos = ((anoDeLancamento + anoDeLancamento2 + anoDeLancamento3) / 3)
// console.log("A media dos anos de lançamento dos 3 livros é :", mediaDosanos)


// Anotações

// semana 1 : Pense em algum item ( livro )

//livro

// const mediaDosanos = ((anoDeLancamento + anoDeLancamento2 + anoDeLancamento3) / 3)
// console.log("A media dos anos de lançamento dos 3 livros é :", mediaDosanos)

// const filme = virouFilme && virouFilme2 && virouFilme3
// console.log("Todos esses livros viraram filme ?", filme)

// console.log(`

// Nome do livro: ${titulo.toLocaleUpperCase()}
// Ano de lançamento do livro: ${anoDeLancamento}
// Virou filme: ${virouFilme}
// Categoria que ele se enquadra: ${categorias}

// Nome do livro: ${titulo2.toLocaleLowerCase()}
// Ano de lançamento do livro: ${anoDeLancamento2}
// Virou filme: ${virouFilme2}
// Categoria que ele se enquadra: ${categorias1}

// Nome do livro: ${titulo3.toLocaleUpperCase()}
// Ano de lançamento do livro: ${anoDeLancamento3}
// Virou filme: ${virouFilme3}
// Categoria que ele se enquadra: ${categoria3}
// `)


// livros.push(objeto1,objeto2,objeto3)
// console.log(livros)

// if (objeto1.valido) {
    
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto2.valido) {
//     livros.push(objeto2)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto3.valido) {
//     livros.push(objeto3)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto4.valido) {
//     livros.push(objeto4)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto5.valido) {
//     livros.push(objeto5)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto6.valido) {
//     livros.push(objeto6)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto7.valido) {
//     livros.push(objeto7)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto8.valido) {
//     livros.push(objeto8)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto9.valido) {
//     livros.push(objeto9)
// } else {
//     alert("o item não foi adicionado")
// }

// for (let livro of livros) {
//     objetoParaString(livro)

//     console.log("----------------------");
// }

// function objetoParaString(livroParafuncao) {
//     for (let propriedade in livroParafuncao) {
//         console.log(`${propriedade}: ${livroParafuncao[propriedade]}`)
//     }

// }

// function buscaLivroTitulo(titulo, arrayDeObjetos) {
//     for (let LivroEscolhido of arrayDeObjetos) {
//         if (LivroEscolhido.titulo.toLocaleLowerCase() == titulo.toLocaleLowerCase()) {
//             console.log(LivroEscolhido)
//             return LivroEscolhido
//         }

//     } alert("Livro não encontrado")

// }

// buscaLivroTitulo("after", livros)