
export default (sequelize, DataTypes) => {
    const Business = sequelize.define('Business', {
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            },
        },
        mobile:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty integer not allowed' }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: { msg: 'Enter a Valid Email' },
            }
        },
        location: {
            type: DataTypes.JSONB,
            allowNull: false,
            defaultValue: {},
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        services: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        workingHours: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        workingDays: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
    });
    Business.associate = (models) => {
    // associations can be defined here
        Business.hasMany(models.Review, {
            foreignKey: 'businessId',
            onDelete: 'SET NULL',
            as: 'review'
        });
    };
    
    return Business;
 
};
