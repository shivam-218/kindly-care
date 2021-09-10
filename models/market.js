const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/harrykart", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const employeeSchema = new mongoose.Schema({
// emailid ye sab name hai form ka

name :{
    type :String,
    required:true
},
   emai:{
       type :String
   },
   telephone : {
    type :String,
   },
   state :{
    type :String
},

   city :{
    type :String,
    required:true
},
message:{
    type :String
},
proof:{
    type :String
}
})
// now collection banaenge

const register = new mongoose.model("Market",employeeSchema);
module.exports = register;