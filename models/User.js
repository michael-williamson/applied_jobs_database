const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:String,
    jobs: [{type: Schema.Types.ObjectId, ref: 'job'}]
});

mongoose.model('user',userSchema);
