const express = require("express");
// Requiring the 'express' package
// returns a function that creates and instance
// of the express application
const app = express();

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

// ROUTES
// a route is a function that creates a response
// for a specific combination of HTTP VERB (METHOD) and
// URL PATH

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