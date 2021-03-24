exports.createCaes_Dono = (req, res) => {
    let caes_dono = {};

    try{
        caes_dono.id_dono = req.body.id_dono;
        caes_dono.id_cao = req.body.id_cao;
        
            caes_dono.create(cadastro_caes, 
                          {attributes: ['id_dono', 'id_cao']})
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

exports.getCaes_Dono = (req, res) => {
    Caes_Dono.findByPk(req.params.id, 
                        {attributes: ['id_dono', 'id_cao']})
        .then(caes_dono => {
          res.status(200).json(caes_dono);
        }).catch(error => {
          console.log(error);

          res.status(500).json({
              message: "Erro...",
              error: error
          });
        })
}

exports.updateCaes_Dono = async (req, res) => {
    try{
        let caes_dono = await caes_dono.findByPk(req.body.id);
    
        if(!caes_dono){
            res.status(404).json({
                message: "Nenhum registro foi encontrado com o Id = " + caes_donoId,
                error: "404"
            });
        } else {    
                let updatedObject = {
                id_dono: req.body.id_dono,
                id_cao: req.body.id_cao
                }
            let result = await Caes_Dono.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id_dono', 'id_cao']
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


exports.deleteCaes_Dono = async (req, res) => {
    try{
        let caes_donoId = req.params.id;
        let caes_dono = await Caes_Dono.findByPk(caes_donoId);

        if(!caes_dono){
            res.status(404).json({
                message: "Não foi encontrado nenhum registro com o id = " + caes_donoId,
                error: "404",
            });
        } else {
            await caes_dono.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o registro com id = " + req.params.id,
            error: error.message
        });
    }
}