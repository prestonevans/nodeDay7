const net = require('net');
let input = process.stdin;

const client = net.createConnection({port: 3000}, () => {
    console.log('connected to server!')
})
client.on('data', (data) => {
    console.log('Msg from server:' + data.toString().trim());
	// client.end();
});
input.on('data', (data) => {
    client.write(data)
})