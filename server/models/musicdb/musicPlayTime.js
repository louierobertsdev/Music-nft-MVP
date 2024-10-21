const Sequelize = require('sequelize');

module.exports = class MusicPlayTime extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        playtime: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'MusicPlayTime',
        tableName: 'musicplaytimes',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    // Music has one play time.
    db.MusicPlayTime.belongsTo(db.Music, {
      foreignKey: 'musicId',
      sourceKey: 'id',
    });
  }
};
