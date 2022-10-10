module.exports=(sequelize,DataTypes)=>{

    const Customers=sequelize.define("Customers",{
         name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          email: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });

    Customers.associate = (models) => {

    
      Customers.hasMany(models.Bookings, { foreignKey: "CustomerId" }) // If only one portfolio per user

      models.Bookings.belongsTo(Customers);


      Customers.hasMany(models.Orders, { foreignKey: "CustomerId" }) // If only one portfolio per user

      models.Orders.belongsTo(Customers);

     
    }
  
    return Customers;
   
  };
