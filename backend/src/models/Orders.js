module.exports = (sequelize, DataTypes) => {

    const Orders=sequelize.define("Orders",{

          item_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          price: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          orderId: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          order_description: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          quantity_ordered: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
         
          customer_phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          cust_place_of_residence: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          request_type: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          request_made_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          request_accepted_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
       
          request_declined_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          request_cancelled_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
        
          order_status: {
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