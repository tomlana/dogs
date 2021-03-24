exports.createCadastro_Caes = (req, res) => {
    let cadastro_caes = {};

    try{
        cadastro_caes.nome = req.body.nome;
        cadastro_caes.raca = req.body.raca;
        
            cadastro_Caes.create(cadastro_caes, 
                          {attributes: ['id_cao', 'nome','raca']})
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

exports.getCadastro_Caes = (req, res) => {
    Cadastro_Caes.findByPk(req.params.id, 
                        {attributes: ['id_cao', 'nome','raca']})
        .then(cadastro_caes => {
          res.status(200).json(cadastro_caes);
        }).catch(error => {
          console.log(error);

          res.status(500).json({
              message: "Erro...",
              error: error
          });
        })
}

exports.updateCadastro_Caes = async (req, res) => {
    try{
        let cadastro_caes = await cadastro_caes.findByPk(req.body.id);
    
        if(!cadastro_caes){
            res.status(404).json({
                message: "Nenhum cão foi encontrado com o Id = " + cadastro_caesId,
                error: "404"
            });
        } else {    
                let updatedObject = {
                nome: req.body.nome,
                raca: req.body.raca
                }
            let result = await Cadastro_Caes.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id_cao', 'nome','raca']
                              }
                            );

            if(!result) {
                res.status(500).json({
                    message: "Error -> Cão não pôde ser atualizado. Id = " + req.params.id,
                    error: "Não pode ser atualizado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não foi possível atualizar o cão com o  id = " + req.params.id,
            error: error.message
        });
    }
}


exports.deleteCadastro_Caes = async (req, res) => {
    try{
        let cadastro_caesId = req.params.id;
        let cadastro_caes = await Cadastro_Caes.findByPk(cadastro_caesId);

        if(!cadastro_caes){
            res.status(404).json({
                message: "Não foi encontrado nenhum cão com o id = " + cadastro_caesId,
                error: "404",
            });
        } else {
            await cadastro_caes.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o cão com id = " + req.params.id,
            error: error.message
        });
    }
}