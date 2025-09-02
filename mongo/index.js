const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://joshishreya773_db_user:Shreya411@cluster0.gwloyhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",);
const studentschema = new mongoose.Schema({
    name:String,
    department:String,
    eno:Number,
});
const stud = mongoose.model("stud",studentschema);
console.log("connected");

const student = new stud({
        name:"Shreya",
        department:"computer science",
        eno:2,
});

student
.save()
.then(()=>{
    console.log("student saves succesfully");
})
.catch((error) =>{
    console.log("error saving student:",error);

});


