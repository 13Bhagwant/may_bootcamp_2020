// Routes
const express = require("express");
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // A week in milliseconds
router.get("/", (request, response) => {
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

router.get("/contact_us", (request, response) => {
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

router.get("/thank_you", (request, response) => {
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
router.get("/hello_world", (request, response) => {
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

router.post("/sign_in", (request, response) => {
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

router.post("/sign_out", (request, response) => {
  // We use 'response.clearCookie(<cookie-name>)' to remove the specific cookie
  // with that cookie-name
  // In this case, we are removing the 'username' cookie from the browser
  response.clearCookie("username");
  response.redirect("/");
});

// Make sure you export router
module.exports = router;