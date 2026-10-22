const caixaCard = [
        {
            Capa: "starwars1.png",
            Titulo: "Star Wars: Episódio I - A Ameaça Fantasma",
            Diretor: "George Lucas",
            Elenco: "Ewan McGregor,Liam Neeson,Natalie Portman",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 16 min",
            Ano: "1999",
            Sinopse: "Dois cavaleiros Jedi escapam de um bloqueio hostil para procurar aliados e encontram um jovem que pode trazer equilíbrio à Força, mas os anteriormente inativos Sith ressurgem para reivindicar sua antiga glória."
        },

        {
            Capa: "starwars2.jpg",
            Titulo: "Star Wars: Episódio II - Ataque dos Clones",
            Diretor: "George Lucas",
            Elenco: "Ewan McGregor,Liam Neeson,Natalie Portman",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 22 min",
            Ano: "2002",
            Sinopse: "Dez anos após o primeiro encontro, Anakin Skywalker tem um romance proibido com Padmé Amidala, enquanto Obi-Wan Kenobi descobre um exército secreto de clones criado para os Jedi."
        },

        {
            Capa: "starwars3.jpg",
            Titulo: "Star Wars: Episódio III - A Vingança dos Sith",
            Diretor: "George Lucas",
            Elenco: "Ewan McGregor,Liam Neeson,Natalie Portman",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 20 min",
            Ano: "2005",
            Sinopse: "Três anos após o início das Guerras Clônicas, Obi-Wan Kenobi persegue uma nova ameaça, enquanto Anakin Skywalker é atraído pelo Chanceler Palpatine para uma conspiração sinistra para governar a galáxia."
        },

        {
            Capa: "starwars4.png",
            Titulo: "Star Wars: Episódio IV - Uma Nova Esperança",
            Diretor: "George Lucas",
            Elenco: "Mark Hamill,Harrison Ford,Carrie Fisher",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 1 min",
            Ano: "1977",
            Sinopse: "Luke Skywalker une forças com um cavaleiro Jedi, um piloto arrogante, um Wookiee e dois andróides para salvar a galáxia da estação de batalha destruidora do Império, enquanto tenta resgatar a Princesa Leia do misterioso Darth Vader."
        },

        {
            Capa: "starwars5.jpg",
            Titulo: "Star Wars: Episódio V - O Império Contra-Ataca",
            Diretor: "Irvin Kershner",
            Elenco: "Ewan McGregor,Liam Neeson,Natalie Portman",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 4 min",
            Ano: "1980",
            Sinopse: "Depois que a Aliança Rebelde é dominada pelo Império, Luke Skywalker começa seu treinamento Jedi com Yoda, enquanto seus amigos são perseguidos por toda a galáxia por Darth Vader e pelo caçador de recompensas Boba Fett."
        },

        {
            Capa: "starwars6.jpg",
            Titulo: "Star Wars: Episódio VI - O Retorno de Jedi",
            Diretor: "Richard Marquand",
            Elenco: "Mark Hamill,Harrison Ford,Carrie Fisher",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 11 min",
            Ano: "1983",
            Sinopse: "Depois de resgatar Han Solo de Jabba, o Hutt, a Aliança Rebelde tenta destruir a segunda Estrela da Morte, enquanto Luke luta para ajudar Darth Vader a voltar do lado negro."
        },

        {
            Capa: "starwars7.jpg",
            Titulo: "Star Wars: O Despertar da Força",
            Diretor: "George Lucas",
            Elenco: "Daisy Ridley,John Boyega,Oscar Isaac",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 18 min",
            Ano: "2015",
            Sinopse: "À medida que uma nova ameaça à galáxia surge, Rey, uma varredora do deserto, e Finn, um ex-stormtrooper, devem se juntar a Han Solo e Chewbacca na busca pela única esperança de restaurar a paz."
        },

        {
            Capa: "starwars8.jpg",
            Titulo: "Star Wars: Os Últimos Jedi",
            Diretor: "Rian Johnson",
            Elenco: "Daisy Ridley,John Boyega,Mark Hamill",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 32 min",
            Ano: "2017",
            Sinopse: "Rey desenvolve suas habilidades com a ajuda de Luke Skywalker, enquanto a Resistência se prepara para a batalha com a Primeira Ordem."
        },

        {
            Capa: "starwars9.png",
            Titulo: "Star Wars: A Ascensão Skywalker",
            Diretor: "J.J. Abrams",
            Elenco: "Daisy RidleyJohn BoyegaOscar Isaac",
            Genero: "Ficção Cientifica",
            Duracao: "2 h 21 min",
            Ano: "2019",
            Sinopse: "A Resistência sobrevivente enfrenta a Primeira Ordem mais uma vez."
        },

        {
            Capa: "STARFIGHTER.jpg",
            Titulo: "Star Wars: Starfighter",
            Diretor: "Shawn Levy",
            Elenco: "Aaron PierreRyan GoslingMia Goth",
            Genero: "Ficção Cientifica",
            Duracao: "infinito",
            Ano: "2027",
            Sinopse: "Uma nova aventura de Star Wars ambientada em um período inexplorado da galáxia muito, muito distante, revelando histórias e personagens inéditos desta icônica saga espacial."
        }

    ];

    function chamaDescrip (){

        let text="";

        for (let i=0; i<caixaCard.length; i++){
            text += '<div class="container-principal" id="bloco-card">'+
    
            '<div class="capa-filme"> <img src="../imagens/filmes/' + caixaCard[i].Capa + '">' + '</div>'+            
                '<div class="descricao" id="Descricao"> '+
                    '<ul>'+
                        '<li> <span> Titulo: </span>' + caixaCard[i].Titulo +  '</li>'+
                        '<li> <span> Diretor: </span>' + caixaCard[i].Diretor + '</li>'+
                        '<li> <span> Elenco: </span>' + caixaCard[i].Elenco + '</li>'+
                        '<li> <span> Genero: </span>' + caixaCard[i].Genero + '</li>'+
                    ' <li> <span> Duração: </span>' + caixaCard[i].Duracao + '</li>'+
                    ' <li> <span> Ano: </span>' + caixaCard[i].Ano + '</li>'+
                    '</ul>'+
                    '<h3> SINOPSE: </h3>' +
                    '<p>'  + caixaCard[i].Sinopse + '</p>'+
                '</div>'+
            '</div>';
        }
        document.getElementById("bloco-card").innerHTML = text;
    };
   chamaDescrip();




   

    const menuTop = ["NET2.webp", "HOME", "TV SHOWS", "LANÇAMENTOS", "MINHA LISTA"];
    function chamaMenu () {
       let text2 = "";

        for(let i=0; i <1 ;i++){
            text2 += '<div class="mini-logo"> <a href="../html/home.html">' + '<img src="../imagens/Icones/' + menuTop[0] + '"alt="">' + '</a> </div>'+

        '<div class="menu-nav">'+
            '<nav>'+
                '<ul>'+
                    '<li> <a href="../html/home.html">' + menuTop[1] + '</a> </li>' +
                    '<li> <a href="../html/tvshows.html">' + menuTop[2] + '</a></li>'+
                    '<li> <a href="../html/movies.html">' + menuTop[3] + '</a></li>' +                   
                    '<li> <a href="../html/lancamentos.html">' +  menuTop[4] + '</a></li>'+                                        
                '</ul>'+
            '</nav>' +
        '</div>' +
        '<div class="mini-menu">' +
            '<ul>'+
                '<li>🔍</li>'+
                '<li>🔔</li>'+
                '<li>👤</li>'+
            '</ul>'+
        '</div>';

        }
        document.getElementById("menu-topo").innerHTML = text2;
    }
    chamaMenu();
