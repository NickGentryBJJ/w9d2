// Add your import statements for View and Game here


// const View = require("./ttt-view.js");
import View from './ttt-view';
// const Game = require("../ttt_node/game.js");
import Game from '../ttt_node/game.js'
document.addEventListener("DOMContentLoaded", () => {
  const newGame = new Game()
  const element = document.querySelector('.ttt')
  const newView = new View(newGame, element)
  window.Game = Game


  window.View = View
  window.newGame = newGame
  window.newView = newView
});

