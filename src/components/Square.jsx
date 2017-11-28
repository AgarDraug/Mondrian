import React from 'react';

class Square extends React.Component{
  state = {
    margin: '1px',
    width : '13px',
    height: '13px',
    color: '#fff',
    selected: false,
    hover: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected) {
      if (nextProps.color && nextProps.selected && (this.state.color !== nextProps.color)) {
        this.setState({
          color: nextProps.color,
          selected: true,
        });
      }
    }
  }


  toggleHover = () => () => {
    if (!this.state.hover) {
      this.setState({
        margin: '0px',
        width: '15px',
        height: '15px',
        hover: true,
      });
    } else {
      this.setState({
        margin: '1px',
        width : '13px',
        height: '13px',
        hover: false,
      });
    }
  }
  
  render() {
    const bgColor = this.state.color;    
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
