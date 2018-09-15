import React from 'react';
import PupCard from "./components/pups";
import pups from "./cards.json";
import './App.css';
import Wrapper from "./components/wrapper";

class App extends React.Component {

  state = {
    pups,
    current: 0,
    top: 0,
    clicked: [],
    message: "Click any heckin key to start",
    winMessages: ["Puppin Good Selection!", "Heckin Way to Go", "Your puptastic at this keep playing"]
  }



  trackScore = id => {
    if (this.state.clicked.indexOf(id) === -1) {

      this.state.clicked.push(id);
      this.shuffleArray(this.state.pups)
      this.pickMessage(this.state.winMessages);
      this.setState({
        current: this.state.current + 1, clicked: this.state.clicked, pups: this.state.pups
      });

    }
    else {
      this.state.clicked = [];
      this.shuffleArray(this.state.pups)
      if (this.state.current > this.state.top) {
        this.setState({ top: this.state.current, current: 0, clicked: this.state.clicked, pups: this.state.pups, message: "Heckin Bamboozeled! Click an image to play again!" })
      }
      else {
        this.setState({ current: 0, clicked: this.state.clicked, pups: this.state.pups })

      }

    }


  }


  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  pickMessage = (array) => {
    let i = array.length - 1;
    let j = Math.floor(Math.random() * (i + 1))
    this.setState({ message: array[j] });

  }



  render() {
    return (
      <div class = "header">
        <div className="row">
          <div className="col-sm-4">
            <h3 >The Puppy Bamboozle Game</h3>
            <p className="lead">The Heckin Best Game on the Internet!</p>
          </div>
          <div className="col-sm-4">
            <p className="wins">Current Score:<span className="current">{this.state.current}</span> </p>
            <p className="losses">Top Score :<span className="top">{this.state.top}</span> </p>
          </div>
          <div className="col-sm-4">
            <p className="message">{this.state.message}</p>
          </div>
        </div>
        <Wrapper>
          {this.state.pups.map(e =>
            <PupCard
              key={e.id}
              id={e.id}
              image={e.image}
              trackScore={this.trackScore}
            // handleShuffle={this.handleShuffle}
            // shuffleArray = {this.shuffleArray}
            />
          )}
        </Wrapper>
      </div>
    );


  }
}









export default App;
