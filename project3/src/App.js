import React, {Component} from 'react';
import './App.css';
import AppBar from './AppBar';
import Inputs from './Inputs';
import Slides from './Slides';
import Button from './Button';
import ButtonSubmit from './ButtonSubmit';

class App extends Component {
  /*state = {};*/

  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  increment = () => {
    let curIndex = this.state.index;
    let nextIndex = curIndex + 1;
    this.setState({
      index: nextIndex
    })
  }

  render() {
    return(
      <div className="container">
        <AppBar />
        <Slides curImageIndex={this.state.index} />
        <div onClick={() => this.increment()}><Button/></div>
        <div class="inputs"><Inputs /></div>
        <div onClick="refresh"><ButtonSubmit/></div>
      </div>
    )
  }
}

export default App;
