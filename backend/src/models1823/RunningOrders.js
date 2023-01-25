module.exports = (sequelize, DataTypes) => {

    const RunningOrders=sequelize.define("RunningOrders",{

          accepted_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          expired_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          declined_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          cancelled_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },

    })



    return RunningOrders;

}