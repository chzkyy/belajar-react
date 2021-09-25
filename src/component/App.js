import { Component } from 'react';
import Grid from './Grid'
import '../style/style.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}



export default App;
