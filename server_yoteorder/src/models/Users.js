module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {

     username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      latitude: {
        type: DataTypes.STRING,
        allowNull: true,
     },
     longitude: {
        type: DataTypes.STRING,
        allowNull: true,
     },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      profile_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
     Users.associate = (models) => {


      Users.hasMany(models.Products, { foreignKey: "UserId" }); // If only one portfolio per user

      models.Products.belongsTo(Users);


      Users.hasMany(models.ProductRequests, { foreignKey: "SellerId" }); // If only one portfolio per user

      models.ProductRequests.belongsTo(Users);


      
      Users.hasMany(models.ProductRequests, { foreignKey: "BuyerId" }); // If only one portfolio per user

      models.ProductRequests.belongsTo(Users);


      Users.hasMany(models.Customers, { foreignKey: "UserId" }); // If only one portfolio per user

      models.Customers.belongsTo(Users);

      Users.hasMany(models.SubscriptionRequests, { foreignKey: "UserId" }); // If only one portfolio per user

      models.SubscriptionRequests.belongsTo(Users);


      Users.hasMany(models.Orders, { foreignKey: "UserId" }); // If only one portfolio per user
      
      models.Orders.belongsTo(Users);


      Users.hasMany(models.OrderBids, { foreignKey: "UserId" }); // If only one portfolio per user
      
      models.OrderBids.belongsTo(Users);


      Users.hasMany(models.OrderBids, { foreignKey: "CustomerId"}); // If only one portfolio per user
      
      models.OrderBids.belongsTo(Users);


      Users.hasOne(models.RunningOrders, { foreignKey: "SellerId"}); // If only one portfolio per user
      
      models.RunningOrders.belongsTo(Users);


      Users.hasMany(models.OrderPayments, { foreignKey: "UserId" }) // If only one portfolio per user

      models.OrderPayments.belongsTo(Users);


      Users.hasMany(models.Properties, {
        foreignKey: 'host_id'
      });
      models.Properties.belongsTo(Users);

     
     };
  
    return Users;
  };
  