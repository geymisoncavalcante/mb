
// Importando um objeto da biblioteca postgres
const {Pool} = require('pg')

//instancia do objeto Pool chamado pool
const pool = new Pool({
    user: 'postgres',
    password: '123',
    database: 'teste',
    host: 'localhost',
    porta: 5432
})

pool.connect(function(err){
    if(err){
        console.log(err)
        throw err
    }else{
        console.log("Conectado banco teste")
    }
})


module.exports = pool

