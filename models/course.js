const mongoose=require('mongoose')


//Now we create Schema 
const courseSchema = new mongoose.Schema({
    _id:Number,
name:String,
category:String

})
const Course = mongoose.model("course",courseSchema)  // export model object

module.exports={Course}