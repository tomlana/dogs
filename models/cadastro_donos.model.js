module.exports = (sequelize, Sequelize) => {
	const Cadastro_Donos = sequelize.define('cadastro_donos', {	
	  id_dono: {
            type: Sequelize.INTEGER,
            references: 'donos',
            referencesKey: 'id_dono'
        },
	  nome: {
			type: Sequelize.STRING,
            references: 'donos',
            refrencesKey: 'nome'
	  }
	});
	
	return Cadastro_Donos;
}