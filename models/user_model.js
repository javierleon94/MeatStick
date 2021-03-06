var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
    
  email: {
    type: String,
    required: true
  },
    
  phoneNumber: {
    type: String,
    required: true
  },
    
  address: {
    type: String,
    required: true
  },
  
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;