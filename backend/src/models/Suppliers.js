module.exports=(sequelize,DataTypes)=>{

    const Suppliers=sequelize.define("Suppliers",{

          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          supplier_type: {
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

  Suppliers.associate = (models) => {

    


    Suppliers.hasMany(models.Retailers, { foreignKey: "SupplierId" }) // If only one portfolio per user

    models.Retailers.belongsTo(Suppliers);


    Suppliers.hasMany(models.SupplyStores, { foreignKey: "SupplierId" }) // If only one portfolio per user

    models.SupplyStores.belongsTo(Suppliers);


    Suppliers.hasMany(models.OrdersFromRetailors, { foreignKey: "SupplierId" }) // If only one portfolio per user

    models.OrdersFromRetailors.belongsTo(Suppliers);

    Suppliers.hasMany(models.BusinessEngagements, { foreignKey: "SupplierId" }) // If only one portfolio per user

    models.BusinessEngagements.belongsTo(Suppliers);

    

    Suppliers.hasMany(models.Notifications, { foreignKey: "SupplierId" }) // If only one portfolio per user

    models.Notifications.belongsTo(Suppliers);


    Suppliers.hasMany(models.SupplierSales, { foreignKey: "RetailerId" }) // If only one portfolio per user

    models.SupplierSales.belongsTo(Suppliers);




   };


    return Suppliers;

}