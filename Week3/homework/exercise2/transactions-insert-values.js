const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elifn1996',
  database: 'db_week3',
});

connection.connect((err) => {
  if (err) {
    console.log('Error occurred', err);
  } else {
    console.log('Connected to MySQL Server');

    connection.query(
      `INSERT INTO account (account_number,balance) VALUES 
    (101,7000),
    (102,5000),
    (103,4000);`,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    connection.query(
      `INSERT INTO account_changes (account_number, amount, changed_date, remark) VALUES 
    (101, 1000.00, NOW(), "First"),
        (102, 1500.00, NOW(), "Second"),
        (103, 2500.00, NOW(), "Third");`,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );
  }
});
