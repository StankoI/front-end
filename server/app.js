const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// app.get('/', (req, res) => {
// 	// app.use(express.static('index.html'));
// 	res.send('<h1>Home</h1>');

// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/tasks', (req, res) => {
    res.sendFile(path.join(__dirname, 'tasks.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})