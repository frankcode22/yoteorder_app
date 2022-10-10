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

    // ServiceDefinition.associate = (models) => {


    //   ServiceDefinition.hasMany(models.Staffs, { foreignKey: "ServiceId" }) // If only one portfolio per user

    //   models.Staffs.belongsTo(Services);

    // }
    
    return ServiceTypeSubcategories;
  };
