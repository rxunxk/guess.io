// broadcast points to other groups
import { socket } from "./socketInstance";

export function broadcastPoint(x,y,room){
    console.log(room)
    socket.emit('points',{x,y,room})
}

export function StartBroadcastPoint(x,y,room){
    socket.emit('startpoints',{x,y,room})
}

export function EndBroadcastPoint(room){
    socket.emit('endpoints',room)
}

export function joinRoom(room){
    socket.emit('join-room',room)
}

export function sendMessage(msg,user){
    socket.emit('message',{msg,user})
}