const pool = require('../database/database');

module.exports = class EspecieModel{
    static especieSelect(callback){
        return pool.query('SELECT * FROM armamentos.tab_especie',callback)
    }
    static calibreSelect(callback){
        return pool.query('SELECT * FROM armamentos.tab_calibre',callback)
    }
    static marcaSelect(callback){
        return pool.query('SELECT * FROM armamentos.tab_marca',callback)
    }
    static modeloSelect(callback){
        return pool.query('SELECT * FROM armamentos.tab_modelo', callback) 
    }
    static diretoriaSelect(callback){
        return pool.query('SELECT sigla FROM mrh.organizacao ', callback)
    }
    static omeSelect(callback){
        return pool.query('SELECT * FROM mrh.organizacao ', callback)
    }
    static statusSelect(callback){
        return pool.query('SELECT * FROM armamentos.tab_status', callback)
    }
}