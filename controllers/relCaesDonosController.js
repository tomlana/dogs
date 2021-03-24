exports.createRel_Caes_Donos = (req, res) => {
    let rel_caes_donos = {};

    try{
        rel_caes_donos.id_dono = req.body.id_dono;
        rel_caes_donos.nome_dono = req.body.nome_dono;
        rel_caes_donos.id_cao = req.body.id_cao;
        rel_caes_donos.nome_cao = req.body.nome_cao;
        
        
            rel_caes_donos.create(rel_caes_donos, 
                          {attributes: ['id_dono', 'nome_dono','id_cao','nome_cao']})
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

exports.getRel_Caes_Donos = (req, res) => {
    Caes_Donos.findByPk(req.params.id, 
                        {attributes: ['id_dono', 'nome_dono','id_cao','nome_cao']})
        .then(caes_donos => {
          res.status(200).json(caes_donos);
        }).catch(error => {
          console.log(error);

          res.status(500).json({
              message: "Erro...",
              error: error
          });
        })
}

exports.Rel_Caes_Donos = (req, res) => {
    try{
        Rel_Caes_Donos.findAll({attributes: ['id_dono', 'nome_dono','id_cao','nome_cao']})
        .then(rel_caes_donos => {
            res.status(200).json(rel_caes_donos);
        })
    }catch(error) {
        console.log(error);

        res.status(500).json({
            message: "Erro...",
            error: error
        });
    }
}

exports.updateRel_caes_donos = async (req, res) => {
    try{
        let rel_caes_donos = await rel_caes_donos.findByPk(req.body.id);
    
        if(!rel_caes_donos){
            res.status(404).json({
                message: "Nenhum registro foi encontrado com o Id = " + relatorioId,
                error: "404"
            });
        } else {    
                let updatedObject = {
                id_dono: req.body.id_dono,
                nome_dono: req.body.nome_dono,
                id_cao: req.body.id_cao,
                nome_cao: req.body.nome_cao
                }
            let result = await Rel_Caes_Dono.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id_dono', 'nome_dono','id_cao','nome_cao']
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


exports.deleteRel_Caes_Donos = async (req, res) => {
    try{
        let rel_caes_donosId = req.params.id;
        let rel_caes_donos = await rel_caes_donos.findByPk(rel_caes_donosId);

        if(!rel_caes_donos){
            res.status(404).json({
                message: "Não foi encontrado nenhum registro com o id = " + rel_caes_donosId,
                error: "404",
            });
        } else {
            await rel_caes_donos.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o registro com id = " + req.params.id,
            error: error.message
        });
    }
}
