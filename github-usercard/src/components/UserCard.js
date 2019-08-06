import React from 'react';

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
                <p>Followers: {props.props.followers}</p>
                <p>Following: {props.props.following}</p>
                <p className='bio'>{props.props.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;