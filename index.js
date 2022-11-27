const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
// const studentRoute=require("./routes/student.js")
// const courseRoute=require("./routes/course.js")
// const teacherRoute=require("./routes/teacher.js")


const { Course} = require("./models/course.js");
const { Teacher} = require("./models/teacher.js");
const { Student} = require("./models/student.js");
const app = express()
dotenv.config()

// connectivity to mongodb through mongoose
mongoose.connect(process.env.MONGO_URL,()=>
    {
        console.log("mongodb connected")
    });
  //middlewares
app.use(express.json())
// app.use("/api/stu",studentRoute)
// app.use("/api/tea",teacherRoute)
// app.use("/api/cou",courseRoute)
const courseData = [{
    _id: 01,
    name: "NodeJS",
    category: "Backend"
},
{
    _id: 02,
    name: "MongoDB",
    category: "Database"
}]
  
// Creating array of student data objects
const studentData = [{
    name: "John",
    enroll: 1801,
    courseId: 01
}]
  
// Creating array of teacher data object
const teacherData = [{
    name: "TeacherX",
    teacher_id: 9901,
    courseId: 01
},
{
    name: "TeacherY",
    teacher_id: 9902,
    courseId: 02
}]
  
// Inserting course data.Here we do object data modelling by mapping data objects with models
Course.insertMany(courseData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
  
// Inserting student data
Student.insertMany(studentData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
  
// Inserting teacher data
Teacher.insertMany(teacherData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })

app.listen(27017,()=>{


    console.log("perfectly running ")
})