module.exports=(sequelize,DataTypes)=>{

    const Services=sequelize.define("Services",{


         service_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          service_type: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          description: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          service_cost: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          geo_location: {
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
         
        status:{
            type: DataTypes.STRING,
            allowNull: true,
        },

        service_photo:{
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

    Services.associate = (models) => {


      Services.hasMany(models.Staffs, { foreignKey: "ServiceId" }) // If only one portfolio per user

      models.Staffs.belongsTo(Services);

    
      Services.hasMany(models.Bookings, { foreignKey: "ServiceId" }) // If only one portfolio per user

      models.Bookings.belongsTo(Services);


      Services.hasMany(models.Payments, { foreignKey: "ServiceId" }) // If only one portfolio per user

      models.Payments.belongsTo(Services);


      

     
    }
    
    return Services;
  };
