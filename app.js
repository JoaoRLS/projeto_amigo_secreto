 // Array para armazenar os nomes dos amigos
 let amigos = [];

 function adicionarAmigo() {
   // Captura o campo de entrada pelo ID
   let campoDeEntrada = document.getElementById("amigo");
   let valor = campoDeEntrada.value;

   // Valida a entrada para garantir que não esteja vazia
   if (valor === "") {
     alert("Por favor, insira um nome.");
   } else {
     // Adiciona o valor ao array de amigos
     amigos.push(valor);

     // Limpa o campo de entrada
     campoDeEntrada.value = "";

     // Atualiza a lista de amigos na interface
     atualizarListaDeAmigos();
   }
 }

 function atualizarListaDeAmigos() {
   // Captura o elemento da lista pelo ID
   let listaDeAmigos = document.getElementById("listaDeAmigos");

   // Limpa a lista antes de adicionar novos elementos
   listaDeAmigos.innerHTML = "";

   // Percorre o array de amigos e adiciona cada nome como um elemento <li>
   for (let i = 0; i < amigos.length; i++) {
     let li = document.createElement("li");
     li.textContent = amigos[i];
     listaDeAmigos.appendChild(li);
   }
 }

 function sortearAmigo() {
   // Verifica se o array não está vazio
   if (amigos.length === 0) {
     alert("A lista de amigos está vazia.");
     return;
   }

   // Obtém um índice aleatório usando Math.random() e Math.floor()
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);

   // Retorna o nome do amigo selecionado aleatoriamente
   let amigoAleatorio = amigos[indiceAleatorio];
   console.log(amigoAleatorio);

   // Atualiza o conteúdo do elemento de resultado
   let resultadoElemento = document.getElementById(
     "resultado"
   );
   
   resultadoElemento.innerHTML = "Amigo sorteado: " + amigoAleatorio;
 }