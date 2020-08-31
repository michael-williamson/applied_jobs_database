const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    company: String,
    city:String,
    state: String,
    typeOfDev:String,
    date:String
});

mongoose.model('job',jobSchema);