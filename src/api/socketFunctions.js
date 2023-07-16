// broadcast points to other groups
import { socket } from "./socketInstance";


export function broadcastPoint(x,y){
    socket.emit('points',{x,y})
}

export function StartBroadcastPoint(x,y){
    socket.emit('startpoints',{x,y})
}

export function EndBroadcastPoint(){
    socket.emit('endpoints')
}