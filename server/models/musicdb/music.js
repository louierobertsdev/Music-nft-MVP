const Sequelize = require('sequelize');

module.exports = class Music extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        albumName: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        release: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        songwriter: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        lyricist: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        albumCover: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        IPFSUrl: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Music',
        tableName: 'musics',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    // Music has one user.
    db.Music.belongsTo(db.User, {
      foreignKey: 'uploader',
      sourceKey: 'id',
    });
    // Music has one play time.
    db.Music.hasOne(db.MusicPlayTime, {
      foreignKey: 'musicId',
      sourceKey: 'id',
    });

    db.Music.belongsToMany(db.User, {
      foreignKey: 'music',
      as: 'music',
      through: 'musiclikes',
    });

    db.Music.belongsToMany(db.PlayList, { through: 'PlayListMusic' });
  }
};
