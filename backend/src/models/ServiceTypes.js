module.exports=(sequelize,DataTypes)=>{

    const ServiceTypes=sequelize.define("ServiceTypes",{


          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

         
        
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          added_by: {
            type: DataTypes.STRING,
            allowNull: true,
          },

         
          
    });

    ServiceTypes.associate = (models) => {


      ServiceTypes.hasMany(models.ServiceTypeSubcategories, { foreignKey: "ServiceTypeId" }) // If only one portfolio per user

      models.ServiceTypeSubcategories.belongsTo(ServiceTypes);

    
     
    }
    
    return ServiceTypes;
  };
