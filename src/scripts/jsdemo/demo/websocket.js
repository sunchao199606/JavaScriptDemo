const WebSocket = require('ws');
let socket = new WebSocket('ws://localhost:8081/ws/broadcast');

let initObj = {
    type: 'init', //推送
    id: '00001',
    destId: 'oid',
    branch: '99999',
    app: 'app',
    content: 'gg'

};
socket.on('open', () => {
    console.log('socket open...');
    socket.send(JSON.stringify(initObj));
});
