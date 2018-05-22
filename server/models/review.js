export default (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Empty strings not allowed' }
            }
        },
    });
    Review.associate = (models) => {
    // associations can be defined here
        Review.belongsTo(models.Business, {
            foreignKey: 'businessId',
            onDelete: 'CASCADE,'
        });
    };
    Review.associate = (models) => {
        // associations can be defined here
        Review.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE,'
        });
    };
    return Review;
};