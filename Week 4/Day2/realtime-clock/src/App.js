import React, {useEffect} from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }


  useEffect(() => {
    clearInterval(this.timerID);
  
    return () => {
      second
    }
  }, [this.state.date]);
  

  return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{this.state.date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
