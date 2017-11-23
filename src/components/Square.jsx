import React from 'react';

class Square extends React.Component{
  state = {
    selected: false,
  };

  selected = () => {
    if (!this.state.selected) {
      this.setState({ 
        selected: true, 
        color: this.props.color, 
      });
     // this.props.style.backgroundColor = this.props.color;
      console.log(this.props.row, this.props.column, this);
    } else {
      this.setState({ selected: false });
    }
  }
  
  render() {
    const bgColor = this.state.color ? this.state.color : '#fff';
    const styles = {
      width: '8px',
      height: '8px',
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
        onClick={this.selected}
      />
    );
  }
};


export default Square;
