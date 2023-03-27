const socket = io();

/* Control Scheme:
    NAME-on = control has been pressed
    NAME-off = control has been released
*/

const emitControl = (ctrl) => socket.emit('controls', ctrl);

const setupButton = (elementId, ctrlIdentifier) => {
    const element = document.getElementById(elementId);

    element.addEventListener('mousedown', () => emitControl(`${ctrlIdentifier}-on`));
    element.addEventListener('mouseup', () => emitControl(`${ctrlIdentifier}-off`));
    element.addEventListener('mouseout', () => emitControl(`${ctrlIdentifier}-off`));
};

const init = () => {
    setupButton('upButton', 'up');
    setupButton('downButton', 'down');
    setupButton('leftButton', 'left');
    setupButton('rightButton', 'right');
}


window.onload = init;