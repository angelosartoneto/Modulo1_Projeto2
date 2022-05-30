# Modulo1_Projeto2
Olá, bem vindo ao meu segundo Projeto Avaliativo.

Primeiramente, gostaria de informar que este projeto não foi concluido. Devido as minhas atividades pessoais nas ultimas semanas (Casarei em 11 de Junho), 
tive que sacrificar minhas horas livres ao qual me dedicava a exercicitar os conteudos adiquiridos nas aulas. 
Por hora, dei o meu melhor, no tempo em que tinha disponivel e, assim que possivel, estarei recuperando este tempo perdido.

Dados as resalvas, vamos ao que você precisara para rodar este projeto:

1 - Faça o download dos 2 diretorios: Fake-Server e Solar-app;

2 - Abra os diretórios em seu compilador e, rode o npm-install (https://docs.npmjs.com/cli/v6/commands/npm-install);

3 - Instale também o node (https://nodejs.org/pt-br/download/package-manager/);

4 - Angular (npm i @angular/cli);

5 - Para a autenticação, vamos precisar dessas duas dependências: Auth0 (npm install @auth0/angular-jwt --save) e o jsonwebtoken (npm i jsonwebtoken dotenv-safe);

Realizado as etapas sem erros, abra um terminal no diretorio solar-app e outro no fake-server:

1 - Execute o seguinte comando no diretório fake-server: npm run start;

2 - Execute o seguinte comando no diretório solar-app: ng serve -o;

Pronto! A aplicação ja deve estar rodando. Agora para fazer o login, você precisara destes dados:

E-mail: admin@solar.com.br
Senha: 123

Nota: É feito a validação do usuario e senha. Com alerta na tela de login:
Quando não existe comunicação com o fake-sever, após alguns segundos: "No momento nao é possivel validar os dados, tente novamente!"
Quando existe a comunicação com o fake-server, mas o usuario ou senha está errado: "Usuário ou senha incorreta"
Quando o campo e-mail nao é preenchido com uma conta seguido de @algumacoisa, o botão Entrar fica desabilitado.

Sinto por não conseguir avançar nas demais telas. Agradeço imensamente a compreenção e vamos em frente!

Atenciosamente,
Angelo Sarto.
