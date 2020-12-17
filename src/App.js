import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
      houses: []
    }

  componentDidMount() {
    axios.get('https://anapioficeandfire.com/api/houses/')
      .then(res => {
        console.log(res)

        this.setState({
          houses: res.data
        })
      })
  }

  render() {
    const gotHouses = this.state.houses.map(house => {
      return (
      <p>{house.name} - {house.region}</p>
    );
  })

    return (
      <div className="App">
        {gotHouses}
      </div>
      );
  }
  }

export default App;
