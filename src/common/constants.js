module.exports = Object.freeze({
  MAX_HEIGHT: 800,
  MAX_WIDTH: 800,

  PLAYER_HEIGHT: 192,
  PLAYER_WIDTH: 158,

  TYPE:
  {
    PLAYER: 'player',
  },

  DIR:
  {
    LEFT:  'left',
    RIGHT: 'right',
    UP:    'up',
    DOWN:  'down',
  },

  MSG:
  {
    CTS_GAME_SETUP:     'game-setup',
    CTS_PLAYERS_SETUP:  'player-setup',
    CTS_PLAYER_KEYDOWN: 'player-keydown',
    STC_GAME_STATE:     'game-state',
  },
});
