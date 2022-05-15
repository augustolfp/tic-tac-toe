import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   

function Square(props) {
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
  
function Board() {

  const [estado, setEstado] = React.useState({position: [null,null,null,null,null,null,null,null,null], xIsNext: true});

    function renderSquare(i) {
      return <Square value={estado.position[i]} onClick={() => handleClick(i)} />;
    }

    function handleClick(i) {
      setEstado({position: estado.position.map((elemento,index) => {
        if(index===i && estado.xIsNext) {
          return "X";
        }
        if(index===i && !estado.xIsNext) {
          return "O";
        }
        else {
          return elemento;
        }
      }), xIsNext: !estado.xIsNext})
      console.log(estado);
    }
    const status = 'Next player: X';
  
    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
    );
}
  
function Game() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
}
  
  // ========================================
  ReactDOM.render(<Game />, document.getElementById("root"));
  