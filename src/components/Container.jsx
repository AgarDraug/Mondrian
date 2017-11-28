import React from 'react';
import Square from './Square';

class Container extends React.Component{
  state = {
    selectedSquares: [],
  };

  squares = [];

  selectSquares = (square) => () => {
    const isSelected = this.squares.findIndex(item => 
      (item.row === square.row && item.column === square.column));

    if (isSelected === -1) {
      if (this.squares.length > 0) {
        if (this.squares[0].row < square.row) {
          const rowIsBigger =  square.row - this.squares[0].row;

          if (this.squares[0].column < square.column) {
            const colIsBigger = square.column - this.squares[0].column;
            for (let j = 0; j < rowIsBigger + 1; j += 1) {
              this.squares.push({ 
                row: (this.squares[0].row + (1 * j)), 
                column: square.column,
              });
              
              for (let i = 0; i < colIsBigger; i += 1) {
                this.squares.push({
                  row: (this.squares[0].row + (1 * j)),
                  column: (this.squares[0].column + (1 * i)),
                });
              }
            }
          } else if (this.squares[0].column > square.column) {
            const colIsSmaller = this.squares[0].column - square.column;

            for (let j = 0; j < rowIsBigger + 1; j += 1) {
              this.squares.push({ 
                row: (this.squares[0].row + (1 * j)), 
                column: square.column,
              });

              for (let i = 0; i < colIsSmaller; i += 1) {
                this.squares.push({
                  row: (this.squares[0].row + (1 * j)),
                  column: (this.squares[0].column - (1 * i)),
                });
              }
            }
          }

          for (let j = 0; j < rowIsBigger + 1; j += 1) {
            this.squares.push({ 
              row: (this.squares[0].row + (1 * j)), 
              column: square.column,
            });
          }
        } else {
          const rowIsSmaller = this.squares[0].row - square.row;

          if (this.squares[0].column < square.column) {
            const colIsBigger = square.column - this.squares[0].column;
            for (let j = 0; j < rowIsSmaller + 1; j += 1) {
              this.squares.push({ 
                row: (this.squares[0].row - (1 * j)), 
                column: square.column,
              });
              
              for (let i = 0; i < colIsBigger; i += 1) {
                this.squares.push({
                  row: (this.squares[0].row - (1 * j)),
                  column: (this.squares[0].column + (1 * i)),
                });
              }
            }
          } else if (this.squares[0].column > square.column) {
            const colIsSmaller = this.squares[0].column - square.column;

            for (let j = 0; j < rowIsSmaller + 1; j += 1) {
              this.squares.push({ 
                row: (this.squares[0].row - (1 * j)), 
                column: square.column,
              });

              for (let i = 0; i < colIsSmaller; i += 1) {
                this.squares.push({
                  row: (this.squares[0].row - (1 * j)),
                  column: (this.squares[0].column - (1 * i)),
                });
              }
            }
          }

          for (let i = 0; i < rowIsSmaller; i += 1) {
            this.squares.push({
              row: (this.squares[i].row - 1),
              column: square.column,
            });
          }
        }
      }
      this.squares.push({ row: square.row, column: square.column });
    } else {
      return this.squares = [];
    }
    
    if (this.squares.length > 1) {
      this.setState({
        selectedSquares: this.squares,
      });
      return this.squares = [];
    }
  }

  renderSquares() {
    const rows = 40;
    const ret = [];
    let key = 0;

    for (let i = 0; i < rows; i++) {
      for (let k = 0; k < rows; k++) {
        key += 1;
        const check = this.state.selectedSquares.findIndex(square => 
          square.row === i && square.column === k);
        
          if (check === -1) {
          ret.push(
            <Square
              selectSquare={this.selectSquares}
              row={i} 
              column={k}
              key={key}
            />
          );
        } else {
          ret.push(
            <Square
              selectSquare={this.selectSquares}
              color={this.props.color}
              selected={true}
              row={i} 
              column={k}
              key={key}
            />
          );
        }
      }
    }
    return ret;
  }
  
  render() {
    return (
    <div style={ styles } id={'canvas'}>
      {this.renderSquares()}
    </div>
    );
  }
};

const styles = {
  width: '600px',
  height: '600px',
  border: '1px solid #ccc',
  display: 'inline-block',
};

export default Container;
