module.exports = (sequelize, DataTypes) => {
    const Bookings = sequelize.define("Bookings", {


      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    
      start: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      end: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      desc: {
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

      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    
      
    });
  
    Bookings.associate = (models) => {

      Bookings.hasOne(models.Payments, { foreignKey: "BookingId" }) // If only one portfolio per user

      models.Payments.belongsTo(Bookings);

      // Bookings.hasMany(models.Messages, { foreignKey: "booking_id" }) // If only one portfolio per user

      // models.Messages.belongsTo(Bookings);

      Bookings.hasMany(models.Reviews, { foreignKey: "BookingId" }) // If only one portfolio per user

      models.Reviews.belongsTo(Bookings);

      Bookings.hasMany(models.Payouts, { foreignKey: "BookingId" }) // If only one portfolio per user

      models.Payouts.belongsTo(Bookings);


     

    }
  
    return Bookings;
  };
  