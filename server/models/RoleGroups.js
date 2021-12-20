module.exports = (sequelize, DataTypes) => {
    const RoleGroups = sequelize.define("RoleGroups", {
      roleGroupName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleGroupDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    RoleGroups.associate = (models) => {
      RoleGroups.hasMany(models.RoleRoleGroups, { onDelete: "cascade" });
    };
  
    return RoleGroups;

  };