module.exports = (sequelize, Sequelize) => {
	const Cadastro_Caes = sequelize.define('cadastro_caes', {	
	  id_cao: {
            type: Sequelize.INTEGER,
            references: 'caes',
            referencesKey: 'id_cao'
        },
	  nome: {
			type: Sequelize.STRING,
            references: 'caes',
            refrencesKey: 'nome'
	  },
      raca: {
        type: Sequelize.STRING,
        references: 'caes',
        refrencesKey: 'raca'
     }
	});
	
	return Cadastro_Caes;
}