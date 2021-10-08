const Sequelize = require('sequelize');
module.exports = function (sequelize) {
  return sequelize.define('merchants', {
    id: {
      type: Sequelize.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    MerchantType_id: {
      type: Sequelize.STRING(45),
      allowNull: false,
      references: {
        model: 'merchanttype',
        key: 'id'
      }
    },
    Code: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    AccountNo: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    BankName: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'merchants',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ]
      },
      {
        name: 'fk_Merchants_MerchantType1_idx',
        using: 'BTREE',
        fields: [
          { name: 'MerchantType_id' },
        ]
      },
    ]
  }, {
    timestamps: true,
  });
};
