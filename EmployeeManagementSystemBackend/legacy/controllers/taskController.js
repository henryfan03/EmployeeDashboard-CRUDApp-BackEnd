// const ash = require("express-async-handler");
//
// // @description - gets all tasks
// // @route - GET /api/tasks
// const getTasks = (req, res) => {
//     res.status(200).json({message: "Get tasks"})
// }
//
// // @description - sets a task
// // @route - POST /api/tasks
// const setTask = (req, res) => {
//     res.status(200).json({message: "Set task"})
// }
//
// // @description - Update a task
// // @route - PUT /api/tasks/:id
// const updateTask = (req, res) => {
//     res.status(200).json({message: `Update task ${req.params.id}`})
// }
//
// // @description - Delete a task
// // @route - DELETE /api/tasks/:id
// const deleteTask = (req, res) => {
//     res.status(200).json({message: `Delete task ${req.params.id}`})
// }
//
// module.exports = {
//     getTasks,
//     setTask,
//     updateTask,
//     deleteTask
// }