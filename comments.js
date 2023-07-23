// Create web server
// 1. Create web server
// 2. Create a route to handle GET requests to /comments
// 3. Create a route to handle POST requests to /comments
// 4. Create a route to handle DELETE requests to /comments/:id
// 5. Create a route to handle PUT requests to /comments/:id
// 6. Create a route to handle PATCH requests to /comments/:id
// 7. Create a route to handle GET requests to /comments/:id

// Importing modules
const express = require('express')
const app = express()
const port = 3000

// Importing comments.js
const comments = require('./comments.js')

// 1. Create web server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// 2. Create a route to handle GET requests to /comments
app.get('/comments', (req, res) => {
    res.json(comments)
})

// 3. Create a route to handle POST requests to /comments
app.post('/comments', (req, res) => {
    res.json('POST request received')
})

// 4. Create a route to handle DELETE requests to /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.json('DELETE request received')
})

// 5. Create a route to handle PUT requests to /comments/:id
app.put('/comments/:id', (req, res) => {
    res.json('PUT request received')
})

// 6. Create a route to handle PATCH requests to /comments/:id
app.patch('/comments/:id', (req, res) => {
    res.json('PATCH request received')
})

// 7. Create a route to handle GET requests to /comments/:id
app.get('/comments/:id', (req, res) => {
    res.json('GET request received')
})


