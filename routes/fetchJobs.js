const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
    app.post('/api/fetchJobs',(req,res)=>{
        User.findOne({name:'Mike'})
        .populate('jobs')
        .then((user)=>{
            res.send(user.jobs)
        })
        .catch(err=>console.log(err));
    });
}