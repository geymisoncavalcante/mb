const ArmasModel = require("../models/ArmasModel");
// Na classe controller usamos a regra de negócio e os tratamentos de erros oriundos da classe ArmasModel
const armasController = {
  armasView: function (req, res) {
    ArmasModel.armasSelect(function (err, results) {
      if (err) {
        res.status(404).json("Erro ao fazer select " + err);
        console.log(err);
      } else {
        // no rende,quando quisermos pegar uma page  usamos sem barra, qunado for rota usamos /
        res.render("pages/armas", { armas: results.rows });

        //res.json(results)
        // console.log(results);
      }
    });
    //res.render('/pages/armas')
  },
  // função que traz a rota cadArmas /armasRouter
  cadArmas: function (req, res) {
    res.render("pages/cadArmas");
  },

  insertArmas: function (req, res) {
    let numeracao = req.body.numeracao;
    let especie = req.body.id_especie;
    let calibre = req.body.id_calibre;
    let ome = req.body.id_ome
    ArmasModel.insertArmas(req.body, function (err, results) {
     
      if (numeracao == "" || numeracao == undefined) {
        res.status(404).json("campo nao pode ser vazio");
      } else {
        res.json("a arma inserida foi:" + numeracao);
      }
    });
  },

  getId: function(req, res){
    let id = req.params.id
    
    ArmasModel.getId(id, function(err, results){
        if(err || results.rows == ''){
          res.status(404).json('Não encontrado!')
        }else{
          res.json(results)
        }
    })
  }

};

module.exports = armasController;
