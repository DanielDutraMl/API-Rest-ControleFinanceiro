'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class despesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  despesas.init({
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    data: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Data inválida'
        }}
    },
    categoria: {
      type: DataTypes.ENUM,
      values: ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras'],
      validate: {
        len: [2,15]
      }}
    }, 
    {
    sequelize,
    modelName: 'despesas',
  });
  return despesas;
};