const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elifn1996',
  database: 'world',
});

connection.connect();

connection.query('SELECT Name FROM country WHERE Population > 8000000;');

connection.query("SELECT Name FROM country WHERE Name LIKE '%land%'");

connection.query(
  'SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000',
);

connection.query("SELECT Name FROM country WHERE Continent = 'Europe'");

connection.query('SELECT Name FROM country ORDER BY SurfaceArea DESC');

connection.query("SELECT Name FROM city WHERE CountryCode = 'NLD'");

connection.query("SELECT Population FROM city WHERE Name = 'Rotterdam'");

connection.query('SELECT * FROM country ORDER BY SurfaceArea DESC LIMIT 10');

connection.query('SELECT * FROM city ORDER BY Population DESC LIMIT 10');

connection.query('SELECT SUM(Population) FROM country');
