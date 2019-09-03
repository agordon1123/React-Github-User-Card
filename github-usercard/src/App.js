import React from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Axios('https://api.github.com/users/agordon1123')
      .then(res => {
        this.setState({...this.state, user: res.data})
        console.log('res.data ', res.data)
        console.log('this.state ', this.state)
        console.log('this.state.user ', this.state.user)
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
        {console.log(this.state)}
        <UserCard 
          props={this.state.user}
          // props2={this.state.followers}
        />
        <img className='chart' src="http://ghchart.rshah.org/agordon1123" alt="2016rshah's Github chart" />
      </div>
    );
  
  }
}

export default App;
