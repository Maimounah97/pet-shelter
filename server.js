const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./server/routes/pets.routes")(app);
app.listen(port, () => console.log(`server.js: Listening to port ${port}`));


