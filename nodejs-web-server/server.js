const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Powered-By", "Node.js");

  //   res.statusCode = 200;

  const { method, url } = req;

  //   if (method === "GET") {
  //     res.end("<h1>Method: GET</h1>");
  //   }

  //   if (method === "POST") {
  //     let body = [];

  //     req.on("data", (chunk) => {
  //       body.push(chunk);
  //     });

  //     req.on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       const { name } = JSON.parse(body);
  //       res.end(`<h1>Hai, ${body}</h1>`);
  //     });
  //   }

  //   if (method === "PUT") {
  //     res.end("<h1>Method: PUT</h1>");
  //   }

  //   if (method === "DELETE") {
  //     res.end("<h1>Method: DELETE</h1>");
  //   }

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Ini adalah homepage",
        })
      );
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman homepage tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Ini adalah about",
        })
      );
    } else if (method === "POST") {
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      res.statusCode = 200;
      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.end(
          JSON.stringify({
            message: `Halo, ${name}! Ini adalah about`,
          })
        );
      });
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman about tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan!",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
