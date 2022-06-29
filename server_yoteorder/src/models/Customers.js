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
    return Customers;
  };
