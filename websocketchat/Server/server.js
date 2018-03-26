const WebSocket = require('ws');
const Random = require('randomstring');

const WS = new WebSocket.Server({ port: 8989 })

const clientList = [];

WS.on('connection', (ws, req) => {
    ws.name = randomstring.generate(5);
    clientList.push(ws.name);

    ws.on('message', msg =>
{   
    const Message = JSON.parse(msg);
    switch(Message.text)
    {
        case 'CHANGE_NAME':
            let index = clientList.indexOf(ws.name);
            clientList[index] = Message.newName;
            ws.name = Message.newName;
        break;
        case 'GET_MYNAME':
            console.log('token to ', ws.name);
        break;
        case 'USERS_LIST':
        clientList.map( x=> {
            console.log(x);
        }) 
        break;
        default:
        break;

    }
    console.log(Message.name);
})
});

// addNewUser = () =>
// {
//     let myPromise = new Promise(
//         (resolve, reject)=>
//         {
//             const randToken = Random.generate(7);
//             if(randToken !== 'undefined')
//             {
//                 resolve(randToken);
//             }
//             else{
//                 reject('Could not generate token!');
//             }
//         }
//     )
//     return myPromise;
// }