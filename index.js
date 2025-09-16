let body = document.querySelector("body");

//container da pag
let div_container = document.createElement("div");
div_container.className = "container";


const img_capa = document.createElement("img");
img_capa.src = './img/capa.png';
img_capa.alt = 'foto capa';


let div_menu = document.createElement("div");
div_menu.className = "menu";

// crira o ul para o menu
let ul = document.createElement("ul");

// adicionando os itens do menu com li
let li1 = document.createElement("li");
li1.textContent = "Home |";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "  Sobre |";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "  Serviços |";
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "  Contato |";
ul.appendChild(li4);

// ul dentro do menu
div_menu.appendChild(ul);

let div_conteudo = document.createElement("div");
div_conteudo.className = "conteudo";
let h1 = document.createElement("h1");
h1.textContent = "Sobre Anna Bellla";
h1.id = "anna";
let p1 = document.createElement("p");
p1.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
let p2 = document.createElement("p");
p2.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
let p3 = document.createElement("p");
p3.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
let p4 = document.createElement("p");
p4.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";

let div_footer = document.createElement("div");
div_footer.className = "footer";
let h2 = document.createElement("h1");
h2.textContent = "TODOS OS DIREITOS RESERVADOS";






body.appendChild(div_container);
div_container.appendChild(img_capa);
div_container.appendChild(div_menu);
div_container.appendChild(div_conteudo);
div_conteudo.appendChild(h1);
div_conteudo.appendChild(p1);
div_conteudo.appendChild(p2);
div_conteudo.appendChild(p3);
div_conteudo.appendChild(p4);
div_container.appendChild(div_footer);
div_footer.appendChild(h2);


