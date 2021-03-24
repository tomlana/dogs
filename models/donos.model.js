module.exports = (sequelize, Sequelize) => {
	const Donos = sequelize.define('donos', {	
	  id_dono: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  nome: {
			type: Sequelize.STRING
	  }
	});
	
	return Donos;
}