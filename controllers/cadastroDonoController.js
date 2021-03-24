exports.createCadastro_Donos = (req, res) => {
    let cadastro_donos = {};

    try{
        cadastro_donos.nome = req.body.nome;
        
            cadastro_Donos.create(cadastro_donos, 
                          {attributes: ['id_dono', 'nome']})
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


exports.getCadastro_Donos = (req, res) => {
    Cadastro_Donos.findByPk(req.params.id, 
                        {attributes: ['id_dono', 'nome']})
        .then(cadastro_donos => {
          res.status(200).json(cadastro_donos);
        }).catch(error => {
          console.log(error);

          res.status(500).json({
              message: "Erro...",
              error: error
          });
        })
}

exports.updateCadastro_Donos = async (req, res) => {
    try{
        let cadastro_donos = await Cadastro_Donos.findByPk(req.body.id);
    
        if(!cadastro_donos){
            res.status(404).json({
                message: "Nenhum dono foi encontrado com o Id = " + cadastro_donosId,
                error: "404"
            });
        } else {    
                let updatedObject = {
                nome: req.body.nome
                }
            let result = await Cdastro_Donos.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id_dono', 'nome']
                              }
                            );

            if(!result) {
                res.status(500).json({
                    message: "Error -> Usuário não pôde ser atualizado. Id = " + req.params.id,
                    error: "Não pode ser atualizado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não foi possível atualizar o dono com o  id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteCadastro_Donos = async (req, res) => {
    try{
        let cadastro_donosId = req.params.id;
        let cadastro_donos = await Cadastro_Donos.findByPk(cadastro_donosId);

        if(!cadastro_donos){
            res.status(404).json({
                message: "Não foi encontrado nenhum dono com o id = " + cadastro_donosId,
                error: "404",
            });
        } else {
            await cadastro_donos.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o dono com id = " + req.params.id,
            error: error.message
        });
    }
}