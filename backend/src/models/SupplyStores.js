module.exports = (sequelize, DataTypes) => {
    const SupplyStores = sequelize.define("SupplyStores", {

        product_name:{
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

        price_per_package:{
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

    SupplyStores.associate = (models) => {

        
      

        SupplyStores.hasMany(models.OrdersFromRetailors, { foreignKey: "SupplyStoresId" }) // If only one portfolio per user
  
        models.OrdersFromRetailors.belongsTo(SupplyStores);


        SupplyStores.hasOne(models.BusinessEngagements, { foreignKey: "SupplyStoreId" }) // If only one portfolio per user

        models.BusinessEngagements.belongsTo(SupplyStores);
  
  
        
  
      }

    return SupplyStores;
  };
  