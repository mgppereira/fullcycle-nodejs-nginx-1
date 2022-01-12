const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);
random_number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
connection.query('USE mysql;');
connection.query('CREATE DATABASE IF NOT EXISTS nodedb;');
connection.query('USE nodedb;');
connection.query('CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), data_ins TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);');
connection.query("INSERT INTO people(name)values('Joao Ninguem " + random_number + "')");
connection.query("select name from people order by data_ins desc LIMIT 1", (err, result) => {
  if (err) throw err
  else resultado = result;
});
connection.end();
app.get('/', (req, res) => {
  res.send('<center><h1>Bem vindo Full Cycle !! <br /> Usuario inserido:<br /> ' + resultado[0].name + ' !</h1></center>');
})

app.listen(
  port, () => console.log('Server is up and running')
);
