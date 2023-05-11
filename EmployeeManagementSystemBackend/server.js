const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001

const app = express()

app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/employees', require('./routes/employeeRoutes'))

app.listen(port, () => console.log(`Server has started on port ${port}`))