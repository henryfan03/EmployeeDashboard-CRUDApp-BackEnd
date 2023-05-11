const express = require('express')
const router = express.Router()
const { getEmployees, addEmployee, updateEmployee, removeEmployee } = require('../controllers/employeeController')
// const {updateEmployee} = require("../controllers/employeeController");

router.get('/', getEmployees)

router.post('/', addEmployee)

router.put('/:id', updateEmployee)

router.delete('/:id', removeEmployee)

module.exports = router