import bcrypt from 'bcrypt';
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
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
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        hooks: {
            beforeCreate: (newUser) => {
                newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
                newUser.confirmPassword = bcrypt.hashSync(newUser.confirmPassword, bcrypt.genSaltSync(8));
            },
            afterUpdate: (newUser) => {
                newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
                newUser.confirmPassword = bcrypt.hashSync(newUser.confirmPassword, bcrypt.genSaltSync(8));
            }
        }
    });
    User.associate = (models) => {
    // associations can be defined here
        User.hasMany(models.Business, { foreignKey: 'userId', as: 'business' });
        User.hasMany(models.Review, { foreignKey: 'userId', as: 'review' });
    };
    return User;
};
