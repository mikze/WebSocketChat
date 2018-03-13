import React from 'react'
import {Msg as Message} from './Msg'

export const MsgListComponent = ({Msgs}) => 
(
    <div>
        {Msgs.map(msg => (
			<Message
				{...msg}
			/>
		))}
    </div>
)