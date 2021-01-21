const express = require('express');
const router = express.Router();

const employeeController = require('../controller');


router.post('/add', employeeController.employee.add_data);
router.get('/all', employeeController.employee.get_all_data);

module.exports = router;
