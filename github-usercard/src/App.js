import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Axios('https://api.github.com/users/agordon1123')
      .then(res => {
        this.setState(res.data)
        console.log('res.data ', res.data)
        console.log('this.state ', this.state)
      })
      .catch(err => {
        console.log('err ', err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Usercard</h1>
      </div>
    );
  
  }
}

export default App;
