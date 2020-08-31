const mongoose = require('mongoose');
const User = mongoose.model('user');
const Job = mongoose.model('job');

module.exports = app => {
    app.post('/api/addJob',(req,res)=>{

        const name = "Mike";

        const {
            company,
            city,
            state,
            typeOfDev,
            date
        } = req.body;

        const newJob = new Job({
            company,
            city,
            state,
            typeOfDev,
            date
        });

        User.findOne({name:name})
        .then((user)=>{
            if(!user){
                let newUser = new User({name:name});
                newUser.jobs.push(newJob);
                Promise.all([
                    newUser.save(),
                    newJob.save()
                ]).then(()=> res.send('Job Created'))
                .catch(err=>console.log(err))
            }else{
                user.jobs.push(newJob);
                Promise.all([
                    user.save(),
                    newJob.save()
                ]).then(()=> res.send('Job Created'))
                .catch(err=>console.log(err))
            }
        })

    });
}