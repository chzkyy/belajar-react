import { Component } from "react";
import '../style/style.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class Grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jam">
              <h1>{new Date().toTimeString()}</h1>
            </div>
              <p className="refr">Refresh untuk update</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;