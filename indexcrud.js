const express = require("express");
const studentRoute = require("./route/studentRoute.js");
const app = express();
const PORT = 80;


app.use("/student",studentRoute);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
});

 