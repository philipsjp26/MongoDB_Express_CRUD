const express = require('express');
const router = express.Router();

const employeeController = require('../controller');

router.post('/add', employeeController.employee.add_data);
router.get('/all', employeeController.employee.get_all_data);
router.get('/id/:id', employeeController.employee.find_by_id);
router.delete('/:id', employeeController.employee.delete_by_id);
module.exports = router;
