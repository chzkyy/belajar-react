import { Component } from 'react';
import Grid from './Grid';
import '../style/style.css';
import Particles from "react-tsparticles";
import particlesConfig from './particlesConfig';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', zIndex:1 }}>
          <Particles height="100vh" width="100vw" params={particlesConfig}/>
        </div>

        <Grid />
      </div>
    );
  }
}



export default App;
