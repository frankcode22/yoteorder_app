module.exports = (sequelize, DataTypes) => {

    const OrdersFromRetailors=sequelize.define("OrdersFromRetailors",{

          item_name: {
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
         
          vendor_phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          business_location: {
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

    OrdersFromRetailors.associate = (models) => {

     

      OrdersFromRetailors.hasOne(models.OrderPayments, { foreignKey: "OrdersFromRetailorsId" }) // If only one portfolio per user

      models.OrderPayments.belongsTo(OrdersFromRetailors);

    }

    return OrdersFromRetailors;

}