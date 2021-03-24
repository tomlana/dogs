exports.createRelatorio = (req, res) => {
    let relatorio = {};

    try{
        relatorio.id_dono = req.body.id_dono;
        relatorio.nome_dono = req.body.nome_dono;
        relatorio.id_cao = req.body.id_cao;
        relatorio.nome_cao = req.body.nome_cao;
        relatorio.raca_cao = req.body.raca_cao;
        
            relatorio.create(relatorio, 
                          {attributes: ['id_dono', 'nome_dono','id_cao','nome_cao','raca_cao']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Erro...",
            error: error.message
        });
    }
}

exports.getRelatorio = (req, res) => {
    relatorio.findByPk(req.params.id, 
                        {attributes: ['id_dono','nome_dono','id_cao','nome_cao','raca_cao']})
        .then(relatorio => {
          res.status(200).json(relatorio);
        }).catch(error => {
          console.log(error);

          res.status(500).json({
              message: "Erro...",
              error: error
          });
        })
}

exports.Relatorio = (req, res) => {
    try{
        Relatorio.findAll({attributes: ['id_dono', 'nome_dono','id_cao','nome_cao','raca_cao']})
        .then(relatorio => {
            res.status(200).json(relatorio);
        })
    }catch(error) {
        console.log(error);

        res.status(500).json({
            message: "Erro...",
            error: error
        });
    }
}

exports.updateRelatorio = async (req, res) => {
    try{
        let relatorio = await relatorio.findByPk(req.body.id);
    
        if(!relatorio){
            res.status(404).json({
                message: "Nenhum registro foi encontrado com o Id = " + relatorioId,
                error: "404"
            });
        } else {    
                let updatedObject = {
                id_dono: req.body.id_dono,
                nome_dono: req.body.nome_dono,
                id_cao: req.body.id_cao,
                nome_cao: req.body.nome_cao,
                raca_cao: req.body.raca_cao
                }
            let result = await Relatorio.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id_dono','nome_dono','id_cao','nome_cao','raca_cao']
                              }
                            );

            if(!result) {
                res.status(500).json({
                    message: "Error -> Registro não pôde ser atualizado. Id = " + req.params.id,
                    error: "Não pode ser atualizado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não foi possível atualizar o registro com o  id = " + req.params.id,
            error: error.message
        });
    }
}


exports.deleteRelatorio = async (req, res) => {
    try{
        let relatorioId = req.params.id;
        let relatorio = await Caes_Dono.findByPk(relatorioId);

        if(!relatorio){
            res.status(404).json({
                message: "Não foi encontrado nenhum registro com o id = " + relatorioId,
                error: "404",
            });
        } else {
            await relatorio.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o registro com id = " + req.params.id,
            error: error.message
        });
    }
}

