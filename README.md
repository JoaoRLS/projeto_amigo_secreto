# projeto_amigo_secreto

## Tecnologias:

- HTML
- CSS
- JAVASCRIPT

### Funcionalidades:

- Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

- Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

- Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

- Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

### Tarefas específicas:

- Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

- Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

- Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

- Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

- Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

### Descrição

- Editar
  Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

- Use Math.random() e Math.floor() para obter um índice aleatório.

## Últimas tarefas

### Tarefas específicas:

- Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

- Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

- Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

- Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

![alt text](assets/amigo-secreto.png)
