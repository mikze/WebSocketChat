const WebSocket = require('ws'); 
const randomstring = require('randomstring');
const _ = require('lodash');


const WS = new WebSocket.Server({port:8080});

const clientList = [];


///////////////////////////////// HELP METHODS ////////////////////////////////////////////
const broadcast = (ws, data) =>
{
	ws.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN && client !== ws ) { 
			client.send(JSON.stringify(data))
		}
	})
}

let counter = 0;
const setName = (user, name) =>      // setName search for name, if name is in use add number on end of it anon, anon1, anon2 etc
{
    let findName = name;
    counter === 0 ? null : findName = `${name}${counter}`;
    counter++;
    clientList.map(x => x.userName).indexOf(findName) === -1 ? (user.name = findName, counter = 0) : setName(user, name);
}

/////////////////////////////// SOCKET //////////////////////////////////////////////
WS.on('connection', (ws, req) => {
    
    ws.on('message', msg =>
{   
    const RECIEVED = JSON.parse(msg);

    switch(RECIEVED.type)
    {
        /////////////////////////////////////////////////////////////////////////////
        case 'CHANGE_NAME_REQUEST':

            ws.send(JSON.stringify({type: "USERS_LIST", clientList}));
            let oldName;
            ws.name ? oldName = ws.name : undefined;
            _.remove(clientList, {userName: oldName}); // remove clients name from the list

            setName(ws, RECIEVED.myUserName);
            clientList.push({userName: ws.name});

            broadcast(WS,{type: "RM_USER", name: oldName});
            broadcast(WS,{type: "ADD_USER", name: ws.name});
            ws.send(JSON.stringify({type: "SET_NEW_NAME", myUserName: ws.name}));

        break;
        /////////////////////////////////////////////////////////////////////////////
        case 'SEND_MSG':

            broadcast(WS, {type:"MSG_REC", author:ws.name, msg:RECIEVED.msg});

        break;
        /////////////////////////////////////////////////////////////////////////////
        case "ADD_MSG":

            broadcast(WS,{type: "MSG_REC", msg:RECIEVED.msg , author:ws.name});

        break;
        /////////////////////////////////////////////////////////////////////////////
        case 'USERS_LIST':

        clientList.map( x=> {
            console.log(x);
        }) 

        break;
        /////////////////////////////////////////////////////////////////////////////
        default:
        break;

    }
})

ws.on('close', ()=>
{
    console.log('do widzenia ', ws.name);
    broadcast(WS,{type: "RM_USER", name: ws.name});
    _.remove(clientList, {userName: ws.name}); // remove clients name from the list
})
});
