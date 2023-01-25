module.exports=(sequelize,DataTypes)=>{

    const RetailerProductCategories=sequelize.define("RetailerProductCategories",{


          cat_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
    });

    RetailerProductCategories.associate = (models) => {


        RetailerProductCategories.hasMany(models.Products, { foreignKey: "RetailerProductCategoryId" }) // If only one portfolio per user

       models.Products.belongsTo(RetailerProductCategories);

     }
    
    return RetailerProductCategories;
  };
