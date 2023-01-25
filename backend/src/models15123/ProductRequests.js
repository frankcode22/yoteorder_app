module.exports = (sequelize, DataTypes) => {
    const ProductRequests = sequelize.define("ProductRequests", {

      product_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      request_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customer_phone_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      seller_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      seller_phone_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      
      customer_address: {
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

      cust_place_of_residence: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      request_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currency_code: {
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
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    });
  
    return ProductRequests;
  };
  