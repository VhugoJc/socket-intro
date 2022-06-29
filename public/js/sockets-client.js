
//client socket
const socket = io();
const lblOnline = document.querySelector('#lblOnline');
const lblOffLine = document.querySelector('#lblOffLine');
const txtMessage = document.querySelector('#txtMessage');
const btnMessage = document.querySelector('#btnMessage');

socket.on('connect',()=>{
    lblOnline.style.display    = '';
    lblOffLine.style.display   = 'none';
});

socket.on('disconnect',()=>{
    lblOnline.style.display    = 'none';
    lblOffLine.style.display   = '';
});

btnMessage.addEventListener('click',()=>{
    const message =txtMessage.value;
    socket.emit('sent-message',{
        message: txtMessage.value,
        date: new Date(),
        id: 12222
    },(id)=>{
        console.log(`desde el server ${id}`);
    });

    socket.on('sent-message',(payload)=>{
        console.log(payload);
    });
});