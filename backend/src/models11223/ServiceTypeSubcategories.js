module.exports=(sequelize,DataTypes)=>{

    const ServiceTypeSubcategories=sequelize.define("ServiceTypeSubcategories",{


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

    ServiceTypeSubcategories.associate = (models) => {


      ServiceTypeSubcategories.hasMany(models.Services, { foreignKey: "ServiceTypeSubcategoryId" }) // If only one portfolio per user

       models.Services.belongsTo(ServiceTypeSubcategories);

     }
    
    return ServiceTypeSubcategories;
  };
