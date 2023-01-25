module.exports=(sequelize,DataTypes)=>{

    const Retailers=sequelize.define("Retailers",{

        business_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          business_type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          industry: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          contacts: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          location: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          address_line_1: {
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
    
          city: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          state: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          country: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          profile_photo: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          business_description: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          cloudinary_id:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        cloudinary_url:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Retailers.associate = (models) => {

    
      Retailers.hasMany(models.Services, { foreignKey: "RetailersId" }) // If only one portfolio per user

      models.Services.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.Staffs, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Staffs.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.Customers, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Customers.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.Products, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Products.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.Orders, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Orders.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.RetailerSales, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.RetailerSales.belongsTo(Retailers);
  
      Retailers.hasMany(models.Bookings, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Bookings.belongsTo(Retailers);
  
  
      Retailers.hasMany(models.Notifications, { foreignKey: "RetailersId" }) // If only one portfolio per user
  
      models.Notifications.belongsTo(Retailers);


     Retailers.hasMany(models.OrdersFromRetailors, { foreignKey: "RetailersId" }) // If only one portfolio per user

      models.OrdersFromRetailors.belongsTo(Retailers);


      Retailers.hasMany(models.BusinessEngagements, { foreignKey: "RetailerId" }) // If only one portfolio per user

      models.BusinessEngagements.belongsTo(Retailers);

      Retailers.hasMany(models.SupplierSales, { foreignKey: "RetailerId" }) // If only one portfolio per user

      models.SupplierSales.belongsTo(Retailers);


    
     
    }
  
    return Retailers;
   
  };
