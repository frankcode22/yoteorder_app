module.exports = (sequelize, DataTypes) => {
    const OrderBids = sequelize.define("OrderBids", {

    
      Amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    return OrderBids;
  };
  