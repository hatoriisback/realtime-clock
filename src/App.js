// import logo from './logo.svg';
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      trigger1: "Tunggu ya bentar...",
      trigger2: "",
      trigger3: "",
      nama: "",
      // countdown: new Date(),
      date: new Date(),
    };
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  // countdown = () => {
  //   this.setState({
  //     countdown: new Date(),
  //   });
  // };

  greetTrig1 = () =>
    this.setState({
      trigger1: "",
    });

  greetTrig2 = () =>
    this.setState({
      trigger2: "Tunggu 5 detik lagi deh...",
    });

  greetTrig3 = () =>
    this.setState({
      trigger2: "",
      trigger3: "Nungguin ya ? hehe... aku cuma mau bilang...",
    });

  greetTrig = () =>
    this.setState({
      trigger3: "",
      nama: `I LOVE YOU FELICHIA!!! :))`,
    });

  componentDidMount() {
    this.dateID = setInterval(() => this.tick(), 1000);
    this.timerID = setInterval(() => this.tick(), 1000);
    // this.countdownID = setTimeout(() => this.countdown(), 10000);
    this.trigger1ID = setTimeout(() => this.greetTrig1(), 5000);
    this.trigger2ID = setTimeout(() => this.greetTrig2(), 5001);
    this.trigger3ID = setTimeout(() => this.greetTrig3(), 15002);

    this.greetID = setTimeout(() => this.greetTrig(), 20003);
  }

  componentWillUnmount() {
    clearInterval(this.dateID);
    clearInterval(this.timerID);
    // clearTimeout(this.countdownID);
    clearInterval(this.trigger1ID);
    clearInterval(this.trigger2ID);
    clearInterval(this.trigger3ID);

    clearInterval(this.greetID);
  }

  render() {
    // let reduce = +this.state.countdown.toLocaleTimeString() - 10;
    return (
      <div className="App">
        <div>
          <h1>Realtime Clock</h1>
          <hr />
          <h2>Date: {this.state.date.toLocaleDateString()}</h2>
          <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
          <h1>{this.state.trigger1}</h1>
          <h1>{this.state.trigger2}</h1>
          <h1>{this.state.trigger3}</h1>
          <h1>{this.state.nama}</h1>
        </div>
      </div>
    );
  }
}

export default App;
