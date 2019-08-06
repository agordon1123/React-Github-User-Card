import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData();
    // this.fetchFollowerData();
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

  // fetchFollowerData = () => {
  //   Axios('https://api.github.com/users/agordon1123/followers')
  //     .then(res => {
  //       console.log('res.data ', res.data)
  //     })
  //     .catch(err => {
  //       console.log('err ', err)
  //     })
  // }

  render() {
    return (
      <div className="App">
        <h1 className='title'>GitHub Usercard</h1>
        <UserCard 
          props={this.state}
        />
      </div>
    );
  
  }
}

export default App;
