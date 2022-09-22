const EspecieModel = require("../models/EspecieModel");

const especieController = {
  especieView: async function (req, res) {
    await EspecieModel.especieSelect(function (err, results) {
      EspecieModel.calibreSelect(function (error, data) {
        EspecieModel.marcaSelect(function (e, marca) {
          EspecieModel.modeloSelect(function(er, mode){ 
            EspecieModel.diretoriaSelect(function(errr, direto){
              EspecieModel.omeSelect(function(erree, ome){
                EspecieModel.statusSelect(function(errooo, statu){
                  if (err) {
                    console.log(err);
                    res.status(404).json("Erro no Model");
                  } else {
                    res.render("pages/cadArmas", {
                      especies: results.rows,
                      datas: data.rows,
                      marcas: marca.rows,
                      modes: mode.rows,
                      diretos: direto.rows,
                      omes: ome.rows,
                      status: statu.rows
                    });
                    
                  }           
                })
                
              })              
            })            
          })          
        });
      });
    });
  },
};

module.exports = especieController;
