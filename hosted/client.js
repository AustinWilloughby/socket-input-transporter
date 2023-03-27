const socket = io();

const init = () => {
    const upButton = document.getElementById('upButton');
    upButton.addEventListener('mousedown', () => {
        console.log('up');
        socket.emit('controls', 'up');
    });

    const downButton = document.getElementById('downButton');
    downButton.addEventListener('mousedown', () => {
        console.log('down');
        socket.emit('controls', 'down');
    });
}

window.onload = init;