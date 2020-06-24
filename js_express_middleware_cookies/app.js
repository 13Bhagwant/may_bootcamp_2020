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

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // A week in milliseconds
app.get("/", (request, response) => {
  // This is an example of setting a cookie
  response.cookie("myCookie", "cookie value here", {
    maxAge: COOKIE_MAX_AGE,
  });
  // "response.render(<ejs-file-path>)"
  //  render a template located in "views/" + <ejs-file-path>,
  // When writing the file path, you can omit the extension.

  // In the call below, the file at "./views/welcome.ejs" is
  // render as HTML and is sent as the body of the HTTP response
  // by our Express server. Just like "response.send(<data>)",
  // response.render(<file-path>) terminates response by sending to
  // the client
  response.render("welcome");
});

app.get("/contact_us", (request, response) => {
  // console.log("URL query: ", request.query);
  response.render("contactUs");
});

// http://localhost:3000/thank_you?fullName=hano&favouriteColour=grey&message=javascript
// Scheme | host | PORT | path | query (search)

// The 'query' in the URL is a way to encode data as key-value
// pairs in the URL itself. It used by forms to store data from
// its inputs for example. this called URL encoding

// The encoding format is as follows:
// ?key_1=value_1&key_2=value_2&key_3=value_3
// Express takes a query from a URL and converts it into
// an object as follows:
// { key_1: 'value_1', key_2: 'value_2', key_3: 'value_3' }

app.get("/thank_you", (request, response) => {
  // request.query is a property that holds an object
  // representation of the URL query

  // console.log("request.query: ", request.query);

  //   const fullName = request.query.fullName;
  //   const favouriteColour = request.query.favouriteColour;
  //   const message = request.query.message;
  // below line is equivalent to the above three lines
  const { fullName, favouriteColour, message } = request.query;

  //   response.render("thankYou", {
  //     fullName: fullName,
  //     favouriteColour: favouriteColour,
  //     message: message,
  //   });

  // When object key and value are the same, you can just type key
  response.render("thankYou", {
    fullName,
    favouriteColour,
    message,
  });
});

// The following method "get" is named after the
// HTTP VERB. There is a similar method for each
// verb (e.g. GET, POST, PUT, PATCH, DELETE, OPTION, etc)
// It is arguments are in order:
//  - The URL path to match this route
//  - A callback function that is passed
//      a request and response objects. This function
//      must end the response
app.get("/hello_world", (request, response) => {
  // The "request" is an object that represents
  // the HTTP request made by the client (i.e. browser)
  // It contains the HTTP headers, any data, the URL, the http verb, etc..

  // The "response" is an object that represents the server's
  // response to the client. We build the response ourselves
  // by calling methods on this object. We can specify
  // data to be sent (e.g. HTML, files, JSON, etc), the HTTP
  // headers and the status code.

  // The method "send" of "response" takes a string
  // and adds it to the response body, then terminates
  // the response sending it to the client
  response.send("Hello, World!");
});

app.post("/sign_in", (request, response) => {
  const params = request.body; // { username: 'hindreen' }
  // console.log("request.body: ", params);
  // 'request.body' is only available if the 'urlencoded'
  // middleware is being used and it will contain data from
  // a submitted form as an object

  // 'response.cookie(<cookie-name>, <cookie-value>, <options>)'
  // The 'cookie' method is added to the 'reponse' object
  // by the 'cookie-parser' middleware.
  // We use this method to send cookies to the browser.
  // - The first argument is a string indicates the name of the cookie
  // - The second is the value of the cookie
  // - (optional) the last argument are the options for that cookie
  response.cookie("username", params.username, { maxAge: COOKIE_MAX_AGE });

  // When the broswer receives a redirect response,
  // it makes a follow up request to provided location.
  // In this case, the browser is send to our welcome '/' route
  response.redirect("/");
});

app.post("/sign_out", (request, response) => {
  // We use 'response.clearCookie(<cookie-name>)' to remove the specific cookie
  // with that cookie-name
  // In this case, we are removing the 'username' cookie from the browser
  response.clearCookie("username");
  response.redirect("/");
});

const PORT = 3000;
const ADDRESS = "localhost"; // 127.0.0.1

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});