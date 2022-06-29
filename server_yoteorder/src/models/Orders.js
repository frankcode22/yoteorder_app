module.exports = (sequelize, DataTypes) => {

    const Orders=sequelize.define("Orders",{

          item_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          order_description: {
            type: DataTypes.STRING,
            allowNull: true,
          },
         
          customer_phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          customer_lat: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          customer_longitude: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },

    })

    Orders.associate = (models) => {

        
  
      Orders.hasMany(models.OrderBids, { foreignKey: "OrderId" }) // If only one portfolio per user

      models.OrderBids.belongsTo(Orders);



      Orders.hasOne(models.RunningOrders, { foreignKey: "OrderId" }) // If only one portfolio per user

      models.RunningOrders.belongsTo(Orders);


      Orders.hasOne(models.OrderPayments, { foreignKey: "OrderId" }) // If only one portfolio per user

      models.OrderPayments.belongsTo(Orders);

      

    }

    return Orders;

}