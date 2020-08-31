const mongoose = require('mongoose');
const Job = mongoose.model('job');

module.exports = app => {
    app.post('/api/addJob',(req,res)=>{

        const {
            company,
            city,
            state,
            typeOfDev
        } = req.body;



    });
}