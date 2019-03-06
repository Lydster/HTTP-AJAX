import React from 'react';

    const Friend = (props) => {
    console.log(props)
    return(
        <div className="single-friend">
            <div>{props.friend.name}</div>
            <div>{props.friend.email}</div>
            <div>{props.friend.age}</div>
        </div>
    )
}


export default Friend;