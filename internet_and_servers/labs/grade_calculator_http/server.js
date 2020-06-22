// A 90% - 100%
// B 80% - 89%
// C 70% - 79%
// D 60% - 69%
// E 50% - 59%
// F 0% - 49%

// The client for this is the browser.
// first run the server: node server.js
// then enter the example below(url) into the web browser:
// example: http://localhost:4000/?score=78 (should return C);

const http = require("http");
const url = require("url");

// http.createServer is a function that creates a 'http' server (different from
//  a 'net' server!)
// http.createServer requires 1 parameter: a callback function that is run when
//  an http request is received from a web client
// The callback function requires 2 parameters:
//  - a request object that contains everything from the http request
//  - a response object that is used to sending a response back to the client
const server = http.createServer((request, response) => {
  // url.parse is a function that parses the request url and returns an object
  //    representing the parsed url
  // url.parse requires at least one parameter (two is recommended):
  //    - the url to parse for its parameters (in the case request.url, the url
  //        from the request object)
  //    - a boolean: true means place the parsed results in a key-value object
  //     called query.
  // e.g. request.url = http://localhost:8080/?score=78
  //    url.parse(request.url, true) returns:
  //   {
  //       ...
  //       query: {
  //           score: 78
  //       }
  //   }
  //    meaning after the following line is run, 'params' === {score: "78" }:
  //    const params = url.parase(request.url, true).query
  const params = url.parse(request.url, true).query;
  const score = parseInt(params.score);
  const letterGrade = convertScore(score);

  // response.writeHead is a function that tells the client what the status code
  //  is, and what the other header fields read by the browser
  // response.writeHead requires 2 parameters:
  //    - status code (200 = OK, 400 = Bad Request, 500 = Internal Server Error, etc)
  //    - an object containing header fields
  //        e.g. { 'Content-Type': 'text/html' }says that the type of content
  //        being sent is text/html
  response.writeHead(200, { "Content-Type": "text/html" });

  // response.write is a funciton that takes a string or data buffer (depends on
  //   what the 'Content-Type' header is set to)
  // This is the data that will be sent to the client
  response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grade Calculator</title>
    </head>
    <body>
        <h1>${letterGrade}</h1>
    </body>
    </html>
  `);
  // response.end is a function that then send the data to the client and ends the request
  response.end();
});

server.listen(8080);
console.log("Server is listening on port 8080");

const convertScore = (score) => {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    case score >= 50:
      return "E";
    default:
      return "F";
  }
};