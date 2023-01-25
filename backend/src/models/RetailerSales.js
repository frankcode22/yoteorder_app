module.exports = (sequelize, DataTypes) => {

    const RetailerSales=sequelize.define("RetailerSales",{

          orderId: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },

          total: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },

          amount_paid: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },

          balance: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
        
         
          customer_phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
          },
         

          payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          sale_made_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          sales_accepted_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
       
          sale_declined_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          sale_cancelled_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
        
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    })

    RetailerSales.associate = (models) => {

        
  


    RetailerSales.hasOne(models.OrderPayments, { foreignKey: "RetailerSalesId" }) 

      models.OrderPayments.belongsTo(RetailerSales);

    }

    return RetailerSales;

}