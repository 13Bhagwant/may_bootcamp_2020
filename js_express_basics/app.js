const express = require("express");
// Requiring the 'express' package
// returns a function that creates and instance
// of the express application
const logger = require("morgan");
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

// ROUTES
// a route is a function that creates a response
// for a specific combination of HTTP VERB (METHOD) and
// URL PATH

app.get("/", (request, response) => {
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
  response.render("thankYou", {
    fullName: fullName,
    favouriteColour: favouriteColour,
    message: message,
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

const PORT = 3000;
const ADDRESS = "localhost"; // 127.0.0.1

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});