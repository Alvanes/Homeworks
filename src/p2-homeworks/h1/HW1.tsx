import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export const messageData = {
    avatar: 'https://sun9-11.userapi.com/impg/fAetzfRr02QMN1n0dZrj5lkVxgnAOund2wnkDQ/gQ3LcwKIpL4.jpg?size=604x604&quality=96&sign=72273db81bc21eba46e6e3a4b5009759&type=album',
    name: 'Yan Shumsky',
    message: 'This is some message',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            /></div>
            <hr/>
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
