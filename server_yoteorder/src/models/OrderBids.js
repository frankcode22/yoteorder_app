module.exports = (sequelize, DataTypes) => {
    const OrderBids = sequelize.define("OrderBids", {

    
      Amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    return OrderBids;
  };
  