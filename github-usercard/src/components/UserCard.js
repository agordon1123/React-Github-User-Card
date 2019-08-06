import React from 'react';

const UserCard = props => {
    console.log('props ', props)
    console.log('props.props.bio ', props.props.bio)
    return (
        <div className='user-card'>
            <img src={props.props.avatar_url} key={Date.now()} />
            <p>{props.props.name}</p>
            <p>{props.props.login}</p>
            <p>{props.props.location}</p>
            <p>Followers: {props.props.followers}</p>
            <p>Following: {props.props.following}</p>
            <p>{props.props.bio}</p>
        </div>
    )
}

export default UserCard;