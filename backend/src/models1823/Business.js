module.exports=(sequelize,DataTypes)=>{

    const Business=sequelize.define("Business",{

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

    Business.associate = (models) => {

    Business.hasMany(models.Services, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Services.belongsTo(Business);


    Business.hasMany(models.Staffs, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Staffs.belongsTo(Business);


    Business.hasMany(models.Customers, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Customers.belongsTo(Business);


    Business.hasMany(models.Products, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Products.belongsTo(Business);


    Business.hasMany(models.Orders, { foreignKey: "BusinessId" }) // If only one portfolio per user
    
   Business.hasMany(models.RetailerSales, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.RetailerSales.belongsTo(Business);


    models.Orders.belongsTo(Business);

    Business.hasMany(models.Bookings, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Bookings.belongsTo(Business);


    Business.hasMany(models.Notifications, { foreignKey: "BusinessId" }) // If only one portfolio per user

    models.Notifications.belongsTo(Business);







   };
    return Business;
  };
