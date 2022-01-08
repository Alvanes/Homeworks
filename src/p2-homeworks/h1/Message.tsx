import React from 'react'
import './Message.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (

        <div className="container">

            <div className="avatar"><img src={props.avatar}/></div>
            <div className="triangle">
                <div id="triangle"></div>
            </div>
            <div className="message">
                <div className="name"> {props.name}
                </div>
                <div className="text"> {props.message}
                </div>
                <div className="time"> {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
