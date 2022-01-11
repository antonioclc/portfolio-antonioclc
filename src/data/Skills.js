import react from '../images/physics.png';
import html from '../images/icons8-html-5-240.png'
import css from '../images/icons8-css3-240.png'
import js from '../images/icons8-javascript-240.png'
import redux from '../images/icons8-redux-240.png'
import git from '../images/git-icon.png'

const skillsDescription = [
    {
      title: 'HTML 5',
      image: html,
      description: 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. A marcação HTML inclui "elementos" especiais, como <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> e muitos outros.',
      font: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      myDescription:'Imagine um corpo humano, o html seria o esqueleto/músculos, garantindo toda a estrutura para o bom funcionamento em conjunto com as outras partes fundamentais.'
    },
    {
      title: 'CSS 3',
      image: css,
      description: 'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.',
      font: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      myDescription:'Cuida da estilização da página, de como de fato o usuário vai visualizar a página e interagir com ela, se fosse comparar a um corpo humano, seria toda nossa camada externa, o nosso visual.'
    },
    {
      title: 'JavaScript',
      image: js,
      description: 'JavaScript (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).',
      font: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      myDescription:'Cuida de toda parte lógica da aplicação, se fosse no corpo humano, seria o cérebro, é aqui que colocamos em prática tudo que será feito a cada interação do usuário.'
    },
    {
      title: 'React',
      image: react,
      description: 'React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. Views declarativas fazem com que seu código seja mais previsível e simples de depurar.',
      font: 'https://pt-br.reactjs.org/',
      myDescription:'É a biblioteca que facilita na criação das nossas aplicações, possibilitando a componentização dos elementos que as englobam(e também sua reutilação). É como se conseguíssimos fazer um quebra-cabeça do nosso projeto, onde sua compreensão e manutenção ficam muito mais fáceis de serem executadas.'
    },
    {
      title: 'Redux',
      image: redux,
      description: 'O Redux ajuda você a escrever aplicativos que se comportam de maneira consistente , são executados em ambientes diferentes (cliente, servidor e nativo) e são fáceis de testar. Centraliza o estado e a lógica do seu aplicativo permitindo recursos poderosos como desfazer / refazer , persistência de estado e muito mais.',
      font: 'https://redux.js.org/',
      myDescription:'É uma biblioteca Javascript que permite o gerenciamento de estado da aplicação de forma consistente, centralizando as informações necessárias para controlar todas as tarefas programadas durante o uso do aplicativo.'
    },
    {
      title: 'Git',
      image: git,
      description: 'Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.',
      font: 'https://git-scm.com/',
      myDescription:'Uma maravilhosa ferramente que nos auxilia no controle das verões dos nossos projetos, ou seja, durante o desenvolvimento ou manutenção, qualquer alteração feita ficará mapeada, tendo assim uma espécie de histórico de todas as mudanças, sem correr risco de perder informação.'
    },

  ];

export default skillsDescription;