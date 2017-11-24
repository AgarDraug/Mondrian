import React from 'react';
import Square from './Square';

class Container extends React.Component{
  state = {
    selectedSquares: [],
  };

  selectSquares = (square) => () => {
    console.log(square.row, square.column);
    const squares = this.state.selectedSquares;
    // Check if square is already selected
    const isSelected = squares.findIndex(item => 
      (item.row === square.row && item.column === square.column));


    if (isSelected === -1) {
      console.log('inside');
      squares.push({ row: square.row, column: square.column });
      this.setState({ selectedSquares: squares });
    } else {
      console.log('clearing state');
      return this.setState({ selectedSquares: [] });
    }

    console.log('state - ', this.state.selectedSquares);
    
    if (squares.length > 1) {

    }
  }


  renderSquares() {
    let numSquares = [];
    const rows = 30;

    for (let i = 0; i < (rows); i++) {
      numSquares.push(i);
    }

    const ret = numSquares.map(item => {
      return numSquares.map(elem => {
        return (
          <Square
            selectSquare={this.selectSquares} 
            color={this.props.color}
            key={item + elem} 
            row={item} 
            column={elem}
            selected={this.state.selectedSquares}
          />
        );
      })
    });

    return ret;
  }
  
  render() {
    return (
    <div style={ styles }>
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
