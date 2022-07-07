const express = require("express");
const path = require("path");
const viewRouter = require("./routes/viewRoutes");
const userRouter = require("./routes/userRoutes");
const lessonsRouter = require("./routes/lessonRoutes");
const waRouter = require("./routes/waRoutes");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/appError");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");

const app = express();

// Set up template engine and point to views folder
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//
// ----------------------------------
// --------GLOBAL Middlewares--------

// Setting HTTP headers
app.use(helmet());

// Limit requests from same IP to prevent DOS, etc.
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body in req.body
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// GZIP
app.use(compression());

//
// ------------------------------
// ------------ROUTES------------
app.use("/", viewRouter);
app.use("/api/users", userRouter);
app.use("/api/lessons", lessonsRouter);
app.use("/api/wa", waRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find the page ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } on this server! 😢`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = app;
