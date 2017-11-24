import React from 'react';

class Square extends React.Component{
  state = {
    color: '#fff',
    selected: false,
  };

  checkColor() {
    if (this.state.selected) {
      return this.state.color;
    }

    const check =  this.props.selected.findIndex(first =>
      (first.row === this.props.row && first.column === this.props.column));
      console.log(check);
    if (check !== -1) {
      this.setState({
        color: this.props.color,
        selected: true,
      });

      return this.props.color;
    }
  }
  
  render() {
    const bgColor = (this.props.color && this.props.selected) ? this.checkColor() : '#fff';
    const styles = {
      width: '18px',
      height: '18px',
      margin: '1px',
      display: 'inline-block',
      position: 'relative',
      border: '1px solid black',
      backgroundColor: bgColor,
      boxSizing: 'border-box',
      float: 'left',
    };

    return (
      <div 
        style={ styles }
        onClick={this.props.selectSquare(
          { row: this.props.row, column: this.props.column }
        )}
      />
    );
  }
};


export default Square;
