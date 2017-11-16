import React from 'react';
import Container from './components/Container';
import Palette from './components/Palette';

class App extends React.PureComponent {
  render() {
    return (
      <div style={{ whiteSpeace: 'nowrap' }} >
        <Container/>
        <Palette />
      </div>
    );
  }
}

export default App;
