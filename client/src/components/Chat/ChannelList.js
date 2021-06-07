import React,  {useState, useEffect} from 'react';
import Channel from './Channel';

const ChannelList =(props)=> {
        
        const [list, setList] = useState([])

        useEffect(() => {
            return props.channels? setList(props.channels) : setList([])
        })

        
        const channelMap = list.map(c => {
            <Channel key={c.id}  
                     id={c.id} 
                     name={c.name} 
                     participants={c.participants}
                     /> })


        return (
            <div className="channel-list">
                {channelMap || <h1>List is Empty</h1>}
            </div>
            )
        }

export default ChannelList;