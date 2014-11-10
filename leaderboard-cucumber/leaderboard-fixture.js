(function () {

  'use strict';

  // TODO THIS FILE SHOULD BE IN THE /TESTS DIRECTORY AND VELOCITY WILL COPY IT TO THE MIRROR
  // IN HERE FOR TESTING WITHOUT A MIRROR FOR NOW

  if (Meteor.isServer) {

    // create a predictable set of players and score to test with
    var _resetPlayers = function () {
      Players.remove({});
      var names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie',
        'Carl Friedrich Gauss', 'Nikola Tesla', 'Claude Shannon'];
      _.each(names, function (name, _index) {
        Players.insert({
          name: name,
          score: _index * 5
        });
      });
    };

    Meteor.methods({
      'reset': function () {
        _resetPlayers();
      }
    });

  }

})();