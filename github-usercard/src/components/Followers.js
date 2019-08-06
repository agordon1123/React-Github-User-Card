import React from 'react';
import Axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = []
    }
    componentDidMount() {
        this.fetchFollowerData();
    }

    fetchFollowerData = () => {
        Axios('https://api.github.com/users/agordon1123/followers')
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
            <>
                <p>Followers:</p>
        {/* {this.state.map(el => { return <img src={el.avatar_url} />})} */}
            </>
        )
    }
}

export default Followers;
