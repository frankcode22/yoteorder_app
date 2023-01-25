module.exports=(sequelize,DataTypes)=>{

    const BusinessEngagements=sequelize.define("BusinessEngagements",{


          engagement_description: {
            type: DataTypes.STRING,
            allowNull: false,
          },

         
        
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          request_made_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },

          request_accepted_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
       
          request_declined_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },
          request_cancelled_at: {
            type: DataTypes.DATE(6),
            allowNull: true,
          },


         

         
          
    });

    BusinessEngagements.associate = (models) => {


        BusinessEngagements.hasMany(models.Notifications, { foreignKey: "BusinessEngagementsId" }) // If only one portfolio per user

      models.Notifications.belongsTo(BusinessEngagements);

    
     
    }
    
    return BusinessEngagements;
  };
