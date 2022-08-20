module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {

        name:{
            type: DataTypes.STRING
        },
        type:{
            type: DataTypes.STRING
        },
        product_description:{
            type: DataTypes.STRING
        },

        unit_of_measure:{
            type: DataTypes.STRING
        }, 

        price:{
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER,
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

    
    });

    Products.associate = (models) => {

        
  
        Products.hasMany(models.ProductRequests, { foreignKey: " ProductId" }) // If only one portfolio per user
  
        models.ProductRequests.belongsTo(Products);
  
  
      }

    return Products;
  };
  