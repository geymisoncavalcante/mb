const pool = require('../database/database')

module.exports = class ArmasModel{
    static armasSelect(callback){
        return pool.query('select numeracao, atualizacao::text, usuario, te.descricao as te_descricao, tm.descricao as tm_descricao, tmo.descricao as tmo_descricao, tc.descricao as tc_descricao, og.sigla as og_sigla, ts.descricao as ts_descricao from armamentos.cad_armas as ca inner join armamentos.tab_especie as te on (te.id_especie = ca.id_especie) inner join armamentos.tab_marca as tm on (tm.id_marca = ca.id_marca) inner join armamentos.tab_modelo as tmo on (tmo.id_modelo = ca.id_modelo) inner join armamentos.tab_calibre as tc on (tc.id_calibre = ca.id_calibre) inner join mrh.organizacao as og on (og.id_organizacao = ca.id_ome) inner join armamentos.tab_status as ts on (ts.id_status = ca.id_status) ORDER BY atualizacao DESC limit 5  ', callback)
    }
    static insertArmas(inserir, callback){
        return pool.query('INSERT into  armamentos.cad_armas(numeracao,id_especie,id_calibre,id_marca,id_modelo,id_ome,id_status)values($1,$2,$3,$4,$5,$6,$7)',
        [inserir.numeracao,inserir.especie,inserir.calibre,inserir.marca,inserir.mode,inserir.ome,inserir.statu],callback)
    }   
     static getId(id, callback){
        return pool.query('select * from armamentos.cad_armas where numeracao = $1',[id],callback)
     }   
    
}

