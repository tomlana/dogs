module.exports = (sequelize, Sequelize) => {
	const Relatorio = sequelize.define('relatorio', {	
	  id_dono: {
            type: Sequelize.INTEGER,
            references: 'donos',
            referencesKey: 'id_dono'
        },
	  nome_dono: {
			type: Sequelize.STRING,
            references: 'donos',
            refrencesKey: 'nome'
	  },
      id_cao: {
        type: Sequelize.INTEGER,
        references: 'caes',
        refrencesKey: 'id_cao'
     },
     nome_cao: {
        type: Sequelize.STRING,
        references: 'caes',
        refrencesKey: 'nome'
     },
     raca_cao: {
        type: Sequelize.STRING,
        references: 'caes',
        refrencesKey: 'raca'
     }
	});
	
	return Relatorio;
}