import React from 'react';
import Container from './components/Container';
import Palette from './components/Palette';

class App extends React.PureComponent {
  state = {
    selectedColor: null,
  };

  getColor = (color) => () => {
    console.log(color);
    this.setState({
      selectedColor: color.backgroundColor,
    });
  }

  render() {
    return (
      <div style={{ whiteSpeace: 'nowrap' }} >
        <Container color={this.state.selectedColor} />
        <Palette selectColor={this.getColor} />
      </div>
    );
  }
}

export default App;
