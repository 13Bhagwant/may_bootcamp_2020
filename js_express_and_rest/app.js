const express = require("express");
// Requiring the 'express' package
// returns a function that creates and instance
// of the express application
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const { response } = require("express");
const app = express();

app.set("view engine", "ejs");
// URL (Uniform Resource Locator)
// URL http://localhost:3000/hello_world
// scheme | address | Port | path
//        |       host     |

// The "scheme" identifies the protocol being
// used to communicate. Could be HTTP, HTTPS,
// SSH, FTP, TCP, WS, WSS, SMTP, etc...

// The "host" combines the address and port, it identifies
// the location of the server hosting the website.

// The "path" identifies a specific web page (a resource)
// on a server

// MIDDLEWARE
// LOGGER
// When using the 'morgan' middleware, call it with
// a string that describes the formatting of the logs.
// Find out more here:
// https://github.com/expressjs/morgan
app.use(logger("dev"));

// Body Parser /URLEncoded
// This middleware will decode the data that was submitted
// from the form using the "POST" HTTP verb (method)

// When the 'extended' option is set to 'true', it will allow
// form data to take the shape of arrays or objects.
// But if 'extended' set to 'false', you can only get a string
// from form data.
app.use(express.urlencoded({ extended: true }));
// It will modify the 'request' object given to routes
// by adding a property to it named 'body'
// 'request.body' will be an object containing teh data from our form

// Cookie Parser
app.use(cookieParser());
// What cookieParser does as a middleware is modify the request and response
// objects that are given to all of our routes:
//  - It adds a property to the request object named 'cookies' which is an
//    object itself
//  - it adds a method to response object called cookie() which we will use
//    to set cookies

// STATIC ASSETS
// Use path.join to combine string arguments into directory paths
// for example:
// path.join('/', 'home', 'users', 'hindreen'); // '/home/users/hindreen'

// "__dirname" is a global variable available anywhere in any application
// that is run by Node that returns the full directory path beginning from
// root (i.e. '/') to the location of the file where "__dirname" is used.
// console.log("__dirname: ", __dirname);

// The static assets middleware will take all the files and directories
// at a specified path and serve them publically with their own URL.
app.use(express.static(path.join(__dirname, "public")));
// The live above connects our 'public' directory to express
// so that it can serve the browser those images, css files,
// browser side js, sounds, videos, etc...

// ROUTES
// a route is a function that creates a response
// for a specific combination of HTTP VERB (METHOD) and
// URL PATH

// Custom middleware
app.use((request, response, next) => {
  console.log("cookies", request.cookies);
  // Read cookies from the request using 'request.cookies'
  // They are represented by an object whose keys are cookie-names
  // and the values associated with those properties are the corresponding
  // cookie values.
  const username = request.cookies.username;

  // Set properties on 'response.locals' to create variables
  // that are global and available to all of the rendered templates
  response.locals.loggedInUsername = username || "";

  // The third argument to all middlewares is a callback function
  // named 'next'. When called, it tells Express that this middleware is
  // complete and moves on to the next middleware in line, or if it is the
  // last middleware, begins looking for the route that matches the request
  next();
});

const baseRouter = require("./routes/baseRouter");
// The baseRouter defined within an export from 'routes/baseRouter.js'
// is being 'hooked up' to our app in the line of code below
// This says that all requests with any HTTP verb, and to any path
// beginning with '/' should be handled by the baseRouter
app.use("/", baseRouter);

const PORT = 3000;
const ADDRESS = "localhost"; // 127.0.0.1

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});