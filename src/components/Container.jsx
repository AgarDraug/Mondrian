import React from 'react';
import Square from './Square';

class Container extends React.Component{
  renderSquares() {
    let numSquares = [];
    const rows = 60;

    for (let i = 0; i < (rows); i++) {
      numSquares.push(i);
    }

    const ret = numSquares.map(item => {
      return numSquares.map(elem => {
        return (
          <Square 
            color={this.props.color} 
            key={item + elem} 
            row={item} 
            column={elem} 
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
