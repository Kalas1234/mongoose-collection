const mongoose=require('mongoose')


//Now we create Schema 
const teacherSchema = new mongoose.Schema({
    name: String,
    teacher_id: Number,
    courseId: Number

})
const Teacher = mongoose.model("teacher",teacherSchema)  // export model object
module.exports={Teacher}