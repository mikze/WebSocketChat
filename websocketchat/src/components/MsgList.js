import React from 'react'
import Message from './Msg'

export default MsgList = ({Msgs}) => 
(
    <div>
        {Msgs.map(msg => (
			<Msg
				{...msg}
			/>
		))}
    </div>
)