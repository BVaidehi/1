const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../db");
const utils = require("../utils");

router.get("/all", (request, response) => {
  const connection = db.openConnection();
  const statement = `select * from emp`;
  connection.query(statement, (error, result) => {
    response.send(utils.createResult(error, result));
    connection.end();
  });
});

router.post("/add", (request, response) => {
  const connection = db.openConnection();
  const { empid, name, salary, age } = request.body;
  const statement = `insert into emp (empid, name, salary, age) values(${empid},'${name}',${salary},${age})`;
  connection.query(statement, (error, result) => {
    response.send(utils.createResult(error, result));
    connection.end();
  });
});

module.exports = router;
