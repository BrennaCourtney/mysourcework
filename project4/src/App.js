import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      index: 0,
      defintion: "",
      link: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/",
      key: "?key=3e76c4f6-e8e2-408e-b216-1031dcb5cedc",
      word: "word"
    }
  }

  //before the component load, do all this stuff
  componentDidMount() {
    //let link = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=3e76c4f6-e8e2-408e-b216-1031dcb5cedc";
    let link = this.state.link + this.state.word + this.state.key;
    axios.get(link).then(response => {
      //d for definition
      let d = "" + response.data[0].meta.id;
      console.log(response);
      console.log(d);
      
      this.setState({
        definition: d
      });
      console.log(this.state.definition);
    });
    
  }

  render() {
    //let def = this.state.definition[this.state.index];
  
    return (
      <div className="App">
        <form action="read.php" method="get">
          <input type="text" defaultValue={this.state.word} class="input-text"></input>
          <button type="button" onClick={() => this.setState({word:"document.getElementById('')"})}>read</button>
        </form>
        <div className="text">
          <p>{this.state.definition}</p>
        </div>
        
      </div>
    );
  }
}


export default App;
