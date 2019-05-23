const express = require(`express`);
const app = express();

//import page routes
const pageRoutes = require(`./routes/pages`);

app.use(`/`, pageRoutes);

//export pages
module.exports = app;