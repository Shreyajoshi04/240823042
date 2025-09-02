// const f = require("./mod.js");
// console.log(f(11,12));

// import path from "path";
// const path=require("path");
// console.log("Name:",__dirname);
// console.log(path.basename(__dirname+"f.txt"));
// console.log("path:",path.resolve(__dirname,"f.txt"));

// const moment = require("moment");
// const f = require("./mod.js");
// console.log("date:",moment().format("DD-MM-YYYY"));
// console.log("time:",moment().format("hh"));

const fd=require("fs")
fd.writeFile("base.txt","hiiiiiiiiiii",(err)=>{
    if(err)throw err;
    console.log("saved");
});

fd.readFile("base.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log("saved",data);
});
