const db = require('../models');

module.exports = {
    findAllEmp: (req, res) => {
        db.Employee
            .find({}).then(empData => res.json(empData))
    }
}