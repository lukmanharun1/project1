'use strict';
// const {
//   Model, DataTypes
// } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Kota = sequelize.define(
    "Kota",
    {
      provinsi: DataTypes.STRING,
      type: DataTypes.STRING,
      nama_kota: DataTypes.STRING
    },
    {}
  )
  Kota.associate = function (models) {

  }
  return Kota;
}
  // class Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
      // define association here
    // }
  // };
//   Kota.init({
//     provinsi: DataTypes.STRING,
//     type: DataTypes.STRING,
//     nama_kota: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Kota',
//   });
//   return new Kota;
// }
// module.exports = kota;
 
