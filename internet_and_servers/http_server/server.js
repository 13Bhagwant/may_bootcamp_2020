// https://nodejs.org/docs/latest-v12.x/api/http.html#http_http_createserver_options_requestlistener

const http = require("http");
const url = require("url");

// When creating a server, we pass a callback that will
// be called when an HTTP client (e.g. browser)
// makes to our server

// http://localhost:4000/temp?celcius=90&name=Hano&job=Server
// protocol | Host | Port | path | query (search)

const server = http.createServer((request, response) => {
  //   console.log(request); // this is request object
  //   console.log(response); // this is response object

  //   console.log(request.url);
  const queryParams = url.parse(request.url, true).query;
  //   console.log("Query Params: ", queryParams);

  const fahrenheit = parseFloat(queryParams.temp);
  //   console.log(fahrenheit);
  const celcius = ((fahrenheit - 32) / 9) * 5;

  //   console.log("Temp in Celcius: ", celcius);
  response.writeHead(200);
  response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Temp Converter</title>
    </head>
    <body>
        <h1>Hello, World</h1>
        <form>
            <input type="text" name="temp" placeholder="In Fahrenheit" />
            <input type="submit" value="Convert" />
        </form>

        <p>Fahrenheit: ${fahrenheit}</p>
        <p>Celcius: ${celcius}</p>
    </body>
    </html>
  `);
  response.end();
});

const PORT = 4000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is running on http://${ADDRESS}:${PORT}`);
});