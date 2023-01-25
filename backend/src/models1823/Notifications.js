module.exports = (sequelize, DataTypes) => {
    const Notifications = sequelize.define("Notifications", {

      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subject: {
        type:DataTypes.STRING,
        allowNull: true,
      },
      
      Read: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      archive: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      from_: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
      receiver_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
    });
  
    return Notifications;
  };
  