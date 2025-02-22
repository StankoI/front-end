const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('<h1>Landing Page</h1>');
})

app.get('/home', (req, res) => {
  	res.send('<h1>Home</h1>');
})

app.get('/tasks', (req, res) => {
  	res.send('<h1>Tasks</h1>');
})

app.get('/login', (req, res) => {

	res.send("<h1>LOGIN</h1>");
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})