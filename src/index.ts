import { WebSocket,WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8080});
const allSocket:WebSocket[]=[];
wss.on('connection',(socket)=>{
    allSocket.push(socket);
    console.log('llll');
   socket.on('message',(data)=>{
    console.log(data.toString());
    allSocket.forEach((s)=>{
        if(s!=socket){
            s.send(data.toString());
        }
    })
   })
   
})