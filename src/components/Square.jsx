import React from 'react';

class Square extends React.Component{
  state = {
    selected: false,
  };

  selected = () => {
    if (!this.state.selected) {
      this.setState({ selected: true });
      console.log(this.props.row, this.props.column);
    } else {
      this.setState({ selected: false });
    }
  }
  
  render() {
    const bgColor = this.state.color ? 'rgb(0, 200, 0)' : '#fff';
    const styles = {
      width: '26px',
      height: '26px',
      margin: '2px',
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
      >
      { this.state.selected ? 'X' : ' ' }
      </div>
    );
  }
};


export default Square;
