const express= require("express");
const Route = require("./Route/route");
const app = express();
const PORT = 80;
app.use(express.json());
app.use("/student", Route);

app.listen(PORT,() => {
    console.log(`server is running at http://localhost:${PORT}/`);
});
