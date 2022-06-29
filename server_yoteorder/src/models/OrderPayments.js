const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const OrderPayments=sequelize.define("OrderPayments",{


        amount: {
            type:INTEGER,
            allowNull: true,
          },

          payment_method: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          mpesa_code: {
            type: DataTypes.STRING,
            allowNull: true,
          },


          made_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          released_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          refunded_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },

    })



    return OrderPayments;

}