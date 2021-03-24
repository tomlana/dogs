module.exports = (sequelize, Sequelize) => {
	const Caes = sequelize.define('caes', {	
	  id_cao: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  nome: {
			type: Sequelize.STRING
	  },
      raca: {
        type: Sequelize.STRING
      }
	});
	
	return Caes;
}