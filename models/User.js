const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    Name:String,
    jobs: [{type: Schema.Types.ObjectId, ref: 'job'}]
});

mongoose.model('user',userSchema);
