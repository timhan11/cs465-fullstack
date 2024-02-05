let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const hbs = require("hbs");
require('./app_api/models/db');

let indexRouter = require("./app_server/routes/index");
let usersRouter = require("./app_server/routes/users");
let travelRouter = require("./app_server/routes/travel");
let roomsRouter = require("./app_server/routes/rooms");
let newsRouter = require("./app_server/routes/news");
let mealsRouter = require("./app_server/routes/meals");
let contactRouter = require("./app_server/routes/contact");
let aboutRouter = require("./app_server/routes/about");


const apiRouter = require('./app_api/routes/index')

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, "app_server", "views/partials"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);
app.use("/rooms", roomsRouter);
app.use("/news", newsRouter);
app.use("/meals", mealsRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);

app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
