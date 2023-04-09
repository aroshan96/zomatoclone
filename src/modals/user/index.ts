var mongoose :any = require('mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({
    firstname:{type:String,require,minlength: 5, maxlength:10},
    lastname:{type:String},
    email: {
    type: String,
    index: { unique: true },
    trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
});



module.exports = mongoose.model('User', UserSchema);