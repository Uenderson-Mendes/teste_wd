### Menu Mobile

### Funcionamento do Menu Mobile

O menu mobile utiliza o conceito de uma checkbox oculta e o seletor `@media` para estilizar os elementos quando a largura da tela é menor ou igual a 768 pixels.

**Checkbox Oculta:** A estrutura HTML inclui um input do tipo checkbox com o ID `nav-check`. Essa checkbox é usada como um "gatilho" para mostrar ou ocultar o menu quando está marcada.

**Botão do Menu:** O botão do menu é representado pelo elemento `<label>` que está vinculado à checkbox oculta através do atributo `for`. Quando o label é clicado, a checkbox é marcada/desmarcada e o menu é exibido/ocultado.

**Ícone Hamburguer:** O botão do menu é estilizado com três `<span>` vazios para criar o ícone de hamburguer (três linhas horizontais). Quando o botão é clicado, o fundo do ícone é alterado através da propriedade `background-color` para indicar que o menu está aberto.

**Lista de Links:** A lista de links do menu é representada pelo elemento `<div class="nav-links">`. Quando o botão do menu é clicado, essa lista é expandida e os links são exibidos em uma coluna vertical.

**Estilos Responsivos:** Através do `@media (max-width: 768px)`, os estilos definidos dentro dessa regra CSS são aplicados apenas quando a largura da tela é menor ou igual a 768 pixels. Isso torna o menu mobile responsivo e garante que os estilos se adaptem ao tamanho do dispositivo.

O resultado final é um menu mobile que se comporta como um botão hamburguer quando a largura da tela é pequena o suficiente, e quando o botão é clicado, a lista de links é exibida abaixo do botão, oferecendo uma navegação fácil e intuitiva para dispositivos móveis.
 código CSS não foi fornecido aqui, mas é onde normalmente o menu mobile seria implementado)

### Sobre Nós
- A função `fetchData` é responsável por buscar dados da API.
- A função `updateTabContent` atualiza o conteúdo das abas com os dados buscados da API.
- A URL da API é: `'https://www.mdsystemweb.com.br/projects/api/v1/test/about.php'`.
- Os dados esperados da API são um array com 3 elementos, onde cada elemento possui uma propriedade `description`.
- As descrições dos dados são atribuídas ao conteúdo das abas de acordo com seus IDs ('tab1Content', 'tab2Content', 'tab3Content').
- Caso os dados da API não sejam válidos, a função mostra um erro no console.

### Serviços
- A função `fetchDataFromAPI` faz uma requisição HTTP para a API e chama `updateSlideshow` com os dados obtidos.
- A função `updateSlideshow` cria e insere os slides no slideshow com base nos dados da API.
- O URL da API de serviços é: `"https://www.mdsystemweb.com.br/projects/api/v1/test/services.php"`.
- Os dados esperados da API são um array de objetos, onde cada objeto contém as propriedades `title` e `text`.
- Cada objeto é usado para criar um slide com título e texto inseridos como elementos 'p' e 'q', respectivamente.
- O slideshow é reiniciado para o primeiro slide após a atualização dos dados.

### Funções do Slideshow
- A função `showSlide` é responsável por exibir o slide atual e ocultar os demais.
- A função `plusSlides` move para o slide seguinte ou anterior com base no índice atual.
- As funções `showSlides`, `plusSlides` e a variável `slideIndex` foram redefinidas no escopo global após a função `DOMContentLoaded`.
- Dentro da função `showSlides`, o cálculo dos índices atual, anterior e seguinte está correto e assegura que o slideshow funcione corretamente.
- Os botões '.prev' e '.next' são configurados para chamar as funções `plusSlides(-1)` e `plusSlides(1)` quando clicados, respectivamente.

### Inicialização
- Quando a página é carregada (evento `DOMContentLoaded`), a função `fetchDataFromAPI` é chamada para buscar os dados do serviço.
- Em seguida, as funções para exibir o slideshow são configuradas e inicializadas.
- Instale o npm
- Fork este repositório na sua conta do Bitbucket
- Crie uma branch com o nome desafio
- Instale as dependências
- npm install
- Rode a aplicação
- npm start
#### Acesse http://localhost:8888