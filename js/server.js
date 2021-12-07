const net = require('net');
let fruit = '';
let getColor = false;

const fruitColors = {
    apple: 'red',
    peach: 'peach',
    mango: 'mango'
}

const server = net.createServer((socket) => {
    socket.write('Welcome to the fruit server'.trim());
    socket.on('data', (chunk) => {
        while(!getColor) {
            fruit = String(chunk).trim()
            if (fruitColors.hasOwnProperty(fruit)) {
                socket.write(`A ${fruit} is ${fruitColors[fruit]}`)
            } else {
                socket.write('I don\'t know the color of that fruit. Please enter color')
                getColor = true;
            }
            return
        }
        let color = String(chunk).trim()
        socket.write(`An ${fruit} is ${color}`)
        fruitColors[fruit] = color;
        getColor = false;
    });
})
server.listen(3000, () => {
    console.log('server is up');
    });
