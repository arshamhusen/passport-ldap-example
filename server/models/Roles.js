module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {
      roleName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleDescription: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  

    Roles.associate = (models) => {
      Roles.hasMany(models.RoleRoleGroups, {
        onDelete: "cascade",
      });
      Roles.hasMany(models.UserRoleGroups, {
        onDelete: "cascade",
      });
    };
  
    return Roles;

  };