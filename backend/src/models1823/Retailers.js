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

    
    //     Retailers.hasMany(models.Bookings, { foreignKey: "CustomerId" }) // If only one portfolio per user

    //   models.Bookings.belongsTo(Customers);


     Retailers.hasMany(models.OrdersFromRetailors, { foreignKey: "RetailerId" }) // If only one portfolio per user

      models.OrdersFromRetailors.belongsTo(Retailers);


    
     
    }
  
    return Retailers;
   
  };
