'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Businesses', {
            id: {
                allowNull: true,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: true,
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'userId'
                },
                onDelete: 'CASCADE',
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            mobile: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            location:{
                type: Sequelize.JSONB,
                defaultValue: {},
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            services: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            workingHours: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            workingDays: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Businesses');
    }
};