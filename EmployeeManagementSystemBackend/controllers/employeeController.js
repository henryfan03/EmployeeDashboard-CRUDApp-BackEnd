// @description - gets all employees
// @route - GET /api
const getEmployees = (req, res) => {
    res.status(200).json({message: "Get employees"})
}

// @description - adds a new employee
// @route - POST /api/employees
const addEmployee = (req, res) => {
    res.status(200).json({message: "Added new employee"})
}

// @description - Update an existing employee
// @route - PUT /api/employees/:id
const updateEmployee = (req, res) => {
    res.status(200).json({message: `Updated employee ${req.params.id}`})
}

// @description - Removes an existing employee
// @route - DELETE /api/employees/:id
const removeEmployee = (req, res) => {
    res.status(200).json({message: `Deleted employee ${req.params.id}`})
}

module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
    removeEmployee
}