const mongoose = require('mongoose');
const User = mongoose.model('user');
const Job = mongoose.model('job');

module.exports = app => {
    app.post('/api/addJob',(req,res)=>{
        console.log('is working');
        const Name = "Mike";

        const {
            company,
            city,
            state,
            typeOfDev
        } = req.body;

        const newJob = new Job({
            company,
            city,
            state,
            typeOfDev
        });

        User.findOne({Name})
        .then((user)=>{
            if(!user){
                let newUser = new User({Name});
                newUser.jobs.push(newJob);
                Promise.all([
                    newUser.save(),
                    newJob.save()
                ]).then(()=> res.send('Job Created'))
                .catch(err=>console.log(err))
            }else{
                user.jobs.push(newJob);
                Promise.all([
                    newUser.save(),
                    newJob.save()
                ]).then(()=> res.send('Job Created'))
                .catch(err=>console.log(err))
            }
        })

    });
}