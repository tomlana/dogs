module.exports = (sequelize, Sequelize) => {
	const Caes_dono = sequelize.define('caes_donos', {	
	  id_dono: {
            type: Sequelize.INTEGER,
            references: 'donos',
            referencesKey: 'id_dono'
        },
	  id_cao: {
			type: Sequelize.INTEGER,
            references: 'caes',
            referencesKey: 'id-cao'
	  },
	});
	
	return Caes_dono;
}