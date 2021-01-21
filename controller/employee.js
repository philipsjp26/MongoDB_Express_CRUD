const employee_models = require('../models/database');

const add_data =  async(req,res) => {
    try {
        const employee_data = new employee_models({
            name: req.body.name,
            age: req.body.age
        });
        // check if employee is exist
        const findEmployee = await employee_models.findOne({name: req.body.name}).exec();

        if(findEmployee){
            console.log("employee is exist")
            return res.status(200).json({
                message:"employee already exist"
            })
        }

        const add_employee = await employee_data.save();
        if(!add_employee){
            console.log("cannot add data to database")
            return null
        }

        return res.status(201).json({
            status: "Success",
            content: add_employee
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}

const get_all_data = async(req,res) => {
    try {
        const get_all = await employee_models.find().sort({ name: -1 });

        if(get_all. length == 0){
            console.log("Data not found")
            return null
        }

        return res.status(200).json({
            status:"Success",
            content: get_all
        })
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            content: error.message
        })
    }
}

module.exports = {
    add_data,
    get_all_data
}