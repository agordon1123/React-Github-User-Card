import React from 'react';
import Followers from './Followers';

const UserCard = props => {
    console.log('props ', props)
    console.log('props.props.bio ', props.props.bio)
    return (
        <div className='user-card'>
            <div>
                <img className='user-img' src={props.props.avatar_url} key={Date.now()} />
            </div>

            <div className='user-info'>
                <p>{props.props.name}</p>
                <p>{props.props.login}</p>
                <p>{props.props.location}</p>
                <Followers />
                <p className='bio'>{props.props.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;