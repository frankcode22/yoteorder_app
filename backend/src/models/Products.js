module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {

        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        product_description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        unit_of_measure:{
            type: DataTypes.STRING,
            allowNull: true,
        }, 

        price:{
            type: DataTypes.INTEGER,
            allowNull: true,
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

        product_image:{
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

    Products.associate = (models) => {

        
        Products.hasMany(models.ProductRequests, { foreignKey: " ProductId" }) // If only one portfolio per user
  
        models.ProductRequests.belongsTo(Products);

        Products.hasMany(models.Orders, { foreignKey: "ProductId" }) // If only one portfolio per user
  
        models.Orders.belongsTo(Products);


        Products.hasOne(models.BusinessEngagements, { foreignKey: "ProductId" }) // If only one portfolio per user

        models.BusinessEngagements.belongsTo(Products);
  
  
        
  
      }

    return Products;
  };
  