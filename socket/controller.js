const socketController = (socket) => {
        console.log("Cliente conectado");
        socket.on('sent-message',(payload, callback)=>{
            const id = 1234567;
            callback(id);
            socket.broadcast.emit('sent-message',payload);//enviar mensaje a todos 
        });
}

module.exports = {socketController};