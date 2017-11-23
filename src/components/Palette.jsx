import React from 'react';

class Palette extends React.Component {
  render() {
    return (
      <div style={ palette }>
        <div style={{...square, ...orange}} onClick={this.props.selectColor(orange)} />
        <div style={{...square, ...red}} onClick={this.props.selectColor(red)} />        
        <div style={{...square, ...blue}} onClick={this.props.selectColor(blue)} />
        <div style={{...square, ...yellow}} onClick={this.props.selectColor(yellow)} />
        <div style={{...square, ...black}} onClick={this.props.selectColor(black)} />
        <div style={{...square, ...white}} onClick={this.props.selectColor(white)} />
      </div>
    );
  }
};

const square = {
  width: '70px',
  height: '70px', 
  borderRadius: '100px',
  border: '1px solid black',
  display: 'inline-block',
};

const orange = { backgroundColor: 'rgb(255,180,0)' };
const red = { backgroundColor: 'rgb(255,0,0)' };
const blue = { backgroundColor: 'rgb(0,0,255)' };
const yellow = { backgroundColor: 'rgb(255,255,0)' };
const white = { backgroundColor: 'rgb(255,255,255)' };
const black = { backgroundColor: 'rgb(0,0,0)' };

const palette = {
  width: '200px',
  height: '300px',
  marginLeft: '100px',
  display: 'inline-block',
}

export default Palette;
