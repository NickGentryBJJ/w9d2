class View {
  constructor(game, el) {
    this.game = game; 
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const board = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
      let position = document.createElement("li");
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          position.setAttribute("pos", [row, col])
          
        }
        
      }
      
      board.appendChild(position);
    
      this.el.appendChild(board);
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