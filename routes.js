const express = require(`express`);
const app = express();

//import page routes
const pageRoutes = require(`./routes/pages`);
const blogsRoutes = require(`./routes/blogs`);

//register page routes
app.use(`/`, pageRoutes);
app.use(`/blogs`, blogsRoutes);

//export pages
module.exports = app;