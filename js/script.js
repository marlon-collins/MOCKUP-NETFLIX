
//criar um array de objeto

//function
//variavel
//variavel que recebe


//for - in 2 loops
//let text pra receber o TextDecoder tem que receber a tag ul dentro do for chama li e no getelement o fechamento da ul 
//fora do loop

//document.getElementById(ID).innerHTML = ctext += </ul> 

//a função deve ser chamada lá do outro lado no html








// let descricao = [
//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//       "Duracao":"1h20min"
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//       "Duracao":"1h20min"
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//       "Duracao":"1h20min"
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//       "Duracao":"1h20min"
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//       "Duracao":"1h20min"
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//        "Duracao":"1h20min"
//     },
// ];
// function descrip(){

//     let text = "";

//     for (let i in descricao){
//         text += "<div class="descrisao"> <ul>" + 
//         "<li>" + descricao[i].titulo + "</li>" + "<br>" +
//         "<li>" + descricao[i].titulo_original + "</li>" + "<br>" +
//         "<li>" + descricao[i].ano + "</li>" + "<br>" +
//         "<li>" + descricao[i].genero + "</li>" + "<br>" +
//         "<li>" + descricao[i].descricao + "</li>" + "<br>" +
//         "<li>" + descricao[i].Duracao + "</li>" + "<br>"+
        
//         "</ul> </div>" ;

        
// };
// document.getElementById("lista-filmes").innerHTML = text;
// }
// descrip();


// //função chamar as imagens

// const imagens = [ "filme1.jpg", "filme2.jpg", "filme3.jpg", "filme4.jpg"]; 

// function chamaImagem (){

// let pic = "";

// for (let x in imagens){
//     pic += '<div class="capa1"> + "<img src="../../imagens/filmes/ " + imagens[i] + ">" + </div>';
    
// }
// document.getElementById("lista-filmes").innerHTML = pic;

// }
// chamaImagem();





//2ºTENTATIVA//


// let descricao = [
//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//     },

//     { "id": 1,
//       "titulo": "A Origem",
//       "titulo_original": "Inception",
//       "ano": 2010,
//       "genero": ["Ficção Científica", "Ação", "Suspense"],
//       "diretor": "Christopher Nolan",
//       "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
//        "Duração":"1h20min",
//     },
// ];

// const containerPai = document.getElementById("principal");
// let contador=0;
// function listaFilme (descricao){

//     for(let i=0; i<descricao.length;i++){
//         if( descricao <=0 ){
//             alert("nenhuma descrição");
//         }
//         contador++
//     }
// }
// console.log(contador);




//3º tentava de codigo//

// const filmes = [

//     {
//         id: 1,
//         titulo: "A Origem",
//         titulo_original: "Inception",
//         ano: 2010,
//         genero: ["Ficção Científica", "Ação", "Suspense"],
//         diretor: "Christopher Nolan",
//         duracao: "2h28min",
//         imagem: "../imagens/filmes/a-origem.jpg",
//         descricao: "Um ladrão que rouba segredos corporativos por meio de sonhos recebe a tarefa de plantar uma ideia na mente de um executivo."
//     },

//     {
//         id: 2,
//         titulo: "Star Wars: O Império Contra-Ataca",
//         titulo_original: "The Empire Strikes Back",
//         ano: 1980,
//         genero: ["Ficção Científica", "Aventura"],
//         diretor: "Irvin Kershner",
//         duracao: "2h04min",
//         imagem: "../imagens/filmes/imperio-contra-ataca.jpg",
//         descricao: "Luke Skywalker continua seu treinamento enquanto a Aliança Rebelde enfrenta as forças do Império."
//     },

//     {
//         id: 3,
//         titulo: "O Hobbit: O inicio de uma jornada",
//         titulo_original: "The Hobbit",
//         ano: 2012,
//         genero: ["Fantasia", "Aventura"],
//         diretor: "Peter Jackson",
//         duracao: "2h49min",
//         imagem: "../imagens/filmes/o-hobbit.pjg",
//         descricao: "Bilbo Bolseiro, um relutante Hobbit, parte para a Montanha Solitária com um grupo espirituoso de anões para recuperar o lar e o ouro deles na montanha do dragão Smaug."
//     },


// ];

// function renderizarFilmes (){
//     let html = "";
//     for (let i=0; i <filmes.length;i++){
//         html += 
//         '<article class="card-filme">
//             <div class="filme-imagem">
//                 <img src="${filmes[i].imagem}" alt="Capa de ${filmes[i].titulo}">
//             </div>

//             <div class="filme-descricao">
//                 <h2>${filmes[i].titulo (${filmes[i].ano})</h2>
//                 <p>
//                 <strong> Diretor: </strong>
//                 ${filmes[i].diretor}
//                 </p>
//                 <p>
//                 <strong> Duração : </strong>
//                 ${filmes[i].duracao}
//                 </p>
//                 <p>
//                 <strong> Gêneros: </strong>
//                 ${filmes[i].genero.join}
//                 </p>
//                 <h3> Sinopse / Destaque </h3>
//                 <p>
//                 ${filmes[i].descricao}
//                 </p>
//             </div>
//         </article>';
//     }
//     document.getElementById("lista-filmes").innerHTML = html;
// }

// renderizarFilmes();


// const filmes = [

//     {
//         id: 1,
//         titulo: "A Origem",
//         titulo_original: "Inception",
//         ano: 2010,
//         genero: ["Ficção Científica", "Ação", "Suspense"],
//         diretor: "Christopher Nolan",
//         duracao: "2h28min",
//         imagem: "../../imagens/filmes/a-origem.jpg",
//         descricao: "Um ladrão que rouba segredos corporativos por meio de sonhos recebe a tarefa de plantar uma ideia na mente de um executivo."
//     },

//     {
//         id: 2,
//         titulo: "Star Wars: O Império Contra-Ataca",
//         titulo_original: "The Empire Strikes Back",
//         ano: 1980,
//         genero: ["Ficção Científica", "Aventura"],
//         diretor: "Irvin Kershner",
//         duracao: "2h04min",
//         imagem: "../../imagens/filmes/filme1.jpg",
//         descricao: "Luke Skywalker continua seu treinamento enquanto a Aliança Rebelde enfrenta as forças do Império."
//     },

//     {
//         id: 3,
//         titulo: "O Hobbit: O início de uma jornada",
//         titulo_original: "The Hobbit",
//         ano: 2012,
//         genero: ["Fantasia", "Aventura"],
//         diretor: "Peter Jackson",
//         duracao: "2h49min",
//         imagem: "../../imagens/filmes/o-hobbit.jpg",
//         descricao: "Bilbo Bolseiro parte para a Montanha Solitária com um grupo de anões para recuperar seu lar e o tesouro guardado pelo dragão Smaug."
//     }

// ];


// function renderizarFilmes() {

//     let html = "";

//     for (let i = 0; i < filmes.length; i++) {

//         html += `
//             <article class="card-filme">

//                 <div class="filme-imagem">

//                     <img src="${filmes[i].imagem}"alt="Capa de ${filmes[i].titulo}">

//                 </div>

//                 <div class="filme-descricao">

//                     <h2> ${filmes[i].titulo} (${filmes[i].ano}) </h2>

//                     <p> 
//                     <strong>Título original:</strong>
//                         ${filmes[i].titulo_original}
//                     </p>

//                     <p>
//                         <strong>Diretor:</strong>
//                         ${filmes[i].diretor}
//                     </p>

//                     <p>
//                         <strong>Duração:</strong>
//                         ${filmes[i].duracao}
//                     </p>

//                     <p>
//                         <strong>Gêneros:</strong>
//                         ${filmes[i].genero.join(", ")}
//                     </p>

//                     <h3>Sinopse / Destaque</h3>

//                     <p>${filmes[i].descricao}</p>

//                 </div>

//             </article>
//         `;

//     }

//     document.getElementById("lista-filmes").innerHTML = html;

// }

// fazendo em lista e com o outro atributo de document.getElementById().desse ponto pra frente como subir duas coisas sem uma sobrepor a outra
//COMO LISTA
const filmes = [

    {
        id: 1,
        titulo: "A Origem",
        titulo_original: "Inception",
        ano: 2010,
        genero: ["Ficção Científica", "Ação", "Suspense"],
        diretor: "Christopher Nolan",
        duracao: "2h28min",
        imagem: "../../imagens/filmes/a-origem.jpg",
        descricao: "Um ladrão que rouba segredos corporativos por meio de sonhos recebe a tarefa de plantar uma ideia na mente de um executivo."
    },

    {
        id: 2,
        titulo: "Star Wars: O Império Contra-Ataca",
        titulo_original: "The Empire Strikes Back",
        ano: 1980,
        genero: ["Ficção Científica", "Aventura"],
        diretor: "Irvin Kershner",
        duracao: "2h04min",
        imagem: "../../imagens/filmes/filme1.jpg",
        descricao: "Luke Skywalker continua seu treinamento enquanto a Aliança Rebelde enfrenta as forças do Império."
    },

    {
        id: 3,
        titulo: "O Hobbit: O início de uma jornada",
        titulo_original: "The Hobbit",
        ano: 2012,
        genero: ["Fantasia", "Aventura"],
        diretor: "Peter Jackson",
        duracao: "2h49min",
        imagem: "../../imagens/filmes/o-hobbit.jpg",
        descricao: "Bilbo Bolseiro parte para a Montanha Solitária com um grupo de anões para recuperar seu lar e o tesouro guardado pelo dragão Smaug."
    }

];


function renderizarFilmes() {

    let html = "";

    for (let i = 0; i < filmes.length; i++) {

        html += `


            <article class="card-filme">

                <div class="filme-imagem">

                    <img src="${filmes[i].imagem}"alt="Capa de ${filmes[i].titulo}">

                </div>

                <div class="filme-descricao">

                    <h2> ${filmes[i].titulo} (${filmes[i].ano}) </h2>

                    <ul>
                        <li>
                        <strong>Título original:</strong>
                            ${filmes[i].titulo_original}
                        </li>
                        <li>
                            <strong>Diretor:</strong>
                            ${filmes[i].diretor}
                        </li>
                        <li>
                            <strong>Duração:</strong>
                            ${filmes[i].duracao}
                        </li>
                        <li>
                            <strong>Gêneros:</strong>
                            ${filmes[i].genero.join(", ")}
                        </li>
                    </ul>
                        <h3>Sinopse / Destaque</h3>
                        <p>${filmes[i].descricao}</p>

                </div>

            </article>
        `;

    }

    document.getElementById("lista-filmes").innerHTML = html;

}
renderizarFilmes();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//CRIAÇÃO DO MENU DEU CERTO, AGORA VAMOS TRANSFORMAR EM OBJETO CADA UM NO MESMO PADRÃO//
// const menu = ["HOME", "TV SHOWS", "MOVIES", "GAMES", "NEWS & POPULAR", "MY LIST", "BROWSER"];

// function chamaMenu (){
    
//     let menuNav = "";
    
//     for(let i= 0; i < menu.length; i++){

//     menuNav += "<div> <ul> <li> "+ menu[i] + "</li> </ul> </div>" + "<br>";
//     }
//     document.getElementById("TOPNAV").innerHTML = menuNav;
// }



chamaMenu();
const menuNav =[
    {
        nome: "HOME",
        pagina:"../home.html"

    },
    {
        nome: "TV SHOWS",
        pagina:"../html/tvshows.html"

    },
    {
        nome: "MOVIES",
        pagina:"../movies.html"

    },
    {
        nome: "GAMES",
        pagina:"../games.html"

    },
    {
        nome: "NEWS & POPULAR",
        pagina:"../news&popular.html"

    },
    {
        nome: "MY LIST ",
        pagina:"../mylist.html"

    },
    {
        nome: "BROWSER",
        pagina:"../browser.html"

    }
];

function chamaMenu (){

    let menuNav2 = "";

    for(let i in menuNav){
        menuNav2 += "<div> <ul> <li> <a href=" + menuNav[i].pagina + ">" + menuNav[i].nome + "</a> </li> </ul> </div>";
    }
    document.getElementById("TOPNAV").innerHTML = menuNav2;
}

chamaMenu();















