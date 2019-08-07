import React from 'react';
import Axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchFollowerData();
    }

    fetchFollowerData = () => {
        Axios('https://api.github.com/users/agordon1123/followers')
          .then(res => {
              this.setState({ data: res.data })
          })
          .catch(err => {
            console.log('err ', err)
          })
      }

    render() {
        return (
            <div>
                <p>Followers:</p>
                {this.state.data.map(el => {
                    console.log(el)
                    return (
                        <a href={el.html_url}>
                            <img alt={el.login} className='follower-images' src={el.avatar_url} />
                        </a>
                    )
                })}
            </div>
        )    
    }
}

export default Followers;
