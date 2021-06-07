import React from 'react';

const Channel =()=>  {
    return (
            <div className="channel-item">
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
‍            </div>
            )
}

export default Channel;