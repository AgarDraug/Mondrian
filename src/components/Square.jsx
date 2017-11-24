import React from 'react';

class Square extends React.Component{
  state = {
    margin: '1px',
    width : '18px',
    height: '18px',
    color: '#fff',
    selected: false,
    hover: false,
  };


  toggleHover = () => () => {
    console.log('in');
    if (!this.state.hover) {
      this.setState({
        margin: '0px',
        width: '20px',
        height: '20px',
        hover: true,
      });
    } else {
      this.setState({
        margin: '1px',
        width : '18px',
        height: '18px',
        hover: false,
      });
    }
  }

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
      width: this.state.width,
      height: this.state.height,
      margin: this.state.margin,
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
        onMouseEnter={this.toggleHover()}
        onMouseLeave={this.toggleHover()}
        onClick={this.props.selectSquare(
          { row: this.props.row, column: this.props.column }
        )}
      />
    );
  }
};


export default Square;
