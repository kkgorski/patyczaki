module.exports = Object.freeze({
  MAX_HEIGHT: 800,
  MAX_WIDTH: 800,

  PLAYER_HEIGHT: 78,
  PLAYER_WIDTH: 60,

  TYPE:
  {
    PLAYER: 'player',
    BULLET: 'bullet',
  },

  DIR:
  {
    LEFT:  'left',
    RIGHT: 'right',
  },

  ACTION:
  {
    LEFT:  'left',
    RIGHT: 'right',
    UP:    'up',
    DOWN:  'down',
    FIRE:  'fire',
  },

  MSG:
  {
    CTS_GAME_SETUP:     'game-setup',
    CTS_PLAYERS_SETUP:  'player-setup',
    CTS_PLAYER_KEYDOWN: 'player-keydown',
    STC_GAME_STATE:     'game-state',
  },
});
