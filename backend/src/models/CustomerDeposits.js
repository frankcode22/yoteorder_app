module.exports = (sequelize, DataTypes) => {
    const CustomerDeposits = sequelize.define("CustomerDeposits", {


     
   
      
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true,
      },



      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      mpesa_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      amount_deposited: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      fee_charges: {
        type: DataTypes.DOUBLE,
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

    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Likes, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return CustomerDeposits;
  };
  