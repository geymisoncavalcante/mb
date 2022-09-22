//Primeiro passo biblioteca 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routers/indexRouter');
const loginRouter = require('./routers/loginRouter')
const armasRouter = require('./routers/armasRouter');
const userRouter = require('./routers/userRouter');
const armasController = require('./controllers/armasController');
const pool = require('./database/database');


//Segundo passo Configuração
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Terceiro passo Routers
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/armasRouter',armasRouter);
app.use('/usuarios', userRouter);











//quarto passo criar os controleres
// quinto passo: criar os models 
//criar os render ou console.log apos criar o select no model
//<% armas.forEach(arma=>{ %>

//<%= arma.numeracao %> variavel apresentada no render, por exemplo armas. em seguida chamamos a funcao arma chamando o nome da coluna que queremos no bloco, no banco de dados

//<%})%>

//trabalhar insert
//criar pagina para inserir,tudo dentro do <form>

//erros
 
//validacao

//editar

//excluir

//autenticacao passport

//autorizacao admin ou eu sou user

//log

//test



app.listen(3000, (err)=> {
if(err){
    console.log("erro no listen");
}else{
    console.log("Servidor conectado porta 3000");
}
});