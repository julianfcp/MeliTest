require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
// Cors config
app.use(cors());
// json format
app.use(express.json());

// items route
const useItems = require("./routes/items");
app.use("/api/items", useItems);

// server listening
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});