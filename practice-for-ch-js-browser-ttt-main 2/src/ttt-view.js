class View {
  constructor(game, el) {
    this.game = game; 
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const board = document.createElement("ul");
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const position = document.createElement("li");
          position.setAttribute("pos", [row, col])
          board.append(position);
          
        }
        
      this.el.append(board);
    }

    
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

module.exports = View;