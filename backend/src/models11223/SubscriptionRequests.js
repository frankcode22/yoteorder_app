module.exports=(sequelize,DataTypes)=>{

    const SubscriptionRequests = sequelize.define("SubscriptionRequests",{

         first_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          last_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          location: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          produce: {
            type: DataTypes.STRING,
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
    return SubscriptionRequests;
  };
