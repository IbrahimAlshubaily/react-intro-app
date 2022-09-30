
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//t
function Square(props) {
    return (
        <button className="square" 
        style={{
            backgroundColor: props.color,
          }}
        >
            {props.value}
        </button>
    );
}

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctWord : "tatas",
            squares: Array(25).fill(null),
            nextIdx: 0,

        }
        document.addEventListener('keydown', e => this.updateState(e.key), false);   
    }

    updateState(key) { 

        let nextIdx = this.state.nextIdx;
        const squares = this.state.squares.slice();
        if (key == "Backspace") {
            
            if (nextIdx == 0) return;

            squares[nextIdx - 1] = null;
            nextIdx--;
        } else if(key.length > 1) {
            return;

        } else {

            if (nextIdx == 25) return;
            
            squares[nextIdx] = key;
            nextIdx++;
        }
        

        this.setState({
            squares: squares,
            nextIdx: nextIdx,
          });
        console.log(nextIdx);
    }

    renderSquare(i) {
        const currChar = this.state.squares[i];
        const correctWord = this.state.correctWord;

        let color = "";
        if (currChar) {
            
            if (currChar == correctWord[i%5]) {
                color = 'green';
            } else if (correctWord.includes(currChar)) {
                color = "blue";
            } else {
                color = "gray";
            }
            
        } 

        return (
            <Square
                value = {this.state.squares[i]}
                color = {color}
            />
        );
    }
    //onKeyDown={e => this.updateState(e.key)}
    render() {
        return (
        <div >
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
            </div>
            <div className="board-row">
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
            </div>
            <div className="board-row">
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
            </div>
            <div className="board-row">
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
            </div>
            <div className="board-row">
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
            </div>
        </div>
        );

    }

}

ReactDOM.render(
    <React.StrictMode>
      <Grid/>
    </React.StrictMode>,
    document.getElementById('root')
  );