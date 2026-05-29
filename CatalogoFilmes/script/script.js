 const filmes = [{
    titulo: "Até o Último Homem",
    imagem: "https://www.imdb.com/pt/title/tt2119532/mediaviewer/rm3527049985/?ref_=tt_ov_i",
    descricao: "Um filme biográfico de guerra de 2016 dirigido por Mel Gibson. O longa narra a história real de Desmond Doss, um paramédico do exército americano que, por convicções religiosas, recusou-se a portar armas ou matar inimigos na Segunda Guerra Mundial."
 },
 {
    titulo: "Pearl Harbor",
    imagem: "https://www.imdb.com/pt/title/tt0213149/mediaviewer/rm1039369729/?ref_=tt_ov_i",
    descricao: "Um drama épico de guerra dirigido por Michael Bay. A trama central acompanha dois amigos de infância e pilotos, Rafe e Danny, cuja amizade é abalada quando ambos se apaixonam pela mesma enfermeira, Evelyn, em meio ao devastador ataque surpresa a Pearl Harbor em 1941."
 },
 {
    titulo: "Gigantes de Aço",
    imagem: "https://www.imdb.com/pt/title/tt0433035/mediaviewer/rm3046209025/?ref_=tt_ov_i",
    descricao: "Um filme de ficção científica e drama esportivo lançado em 2011, dirigido por Shawn Levy e estrelado por Hugh Jackman. A trama se passa em um futuro próximo onde o boxe humano foi substituído por lutas entre robôs gigantes controlados por humanos."
 }
]

const listaFilmes = document.getElementById
("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}"
            class="card-img-top">
            div class="card-body">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
                <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver Detalhes</button>
            </div>
            </div>
        </div>
        `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    swal.fire ({
        title:titulo,
        text:"Mais informações do filme",
        icon:"info"
    })
}