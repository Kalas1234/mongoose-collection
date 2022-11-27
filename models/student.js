const mongoose=require('mongoose')


//Now we create Schema 
const studentSchema = new mongoose.Schema({
    name: String,
    enroll: Number,
    courseId: Number

})
const Student = mongoose.model("student",studentSchema)  // export model object
module.exports={Student}
