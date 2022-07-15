const logger = require("pino")();
const { Cube } = require("./cube");

var express = require("express");
var app = express();

//onPr 2

app.get("/", function (req, res) {
  const LENGTH = 5;
  logger.info(`Createing a cube with length: ${LENGTH}`);
  const cube = new Cube(5);
  const properties = `Cube properties: length=${cube.getSideLength()}, surface=${cube.getSurfaceArea()}, volume=${cube.getVolume()}`;
  logger.info(properties);

  res.send(properties);
});

var server = app.listen(process.env.PORT || 8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
