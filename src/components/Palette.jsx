import React from 'react';

class Palette extends React.Component {
  render() {
    return (
      <div style={ palette }>
        <div style={{...square, ...orange}}></div>
        <div style={{...square, ...red}}></div>
        <div style={{...square, ...blue}}></div>
        <div style={{...square, ...yellow}}></div>
        <div style={{...square, ...black}}></div>
        <div style={{...square, ...white}}></div>
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
