const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elifn1996',
  database: 'db_week2',
});

connection.connect((err) => {
  if (err) {
    console.log('Error occurred', err);
  } else {
    console.log('Connected to MySQL Server');

    connection.query(
      `CREATE TABLE IF NOT EXISTS research_Papers (
      paper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      paper_title TEXT,
      conference TEXT,
      publish_date DATE
      );`,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );
    //Many to Many Relationship
    connection.query(
      `CREATE TABLE IF NOT EXISTS authorsPaper (
      id int not NULL PRIMARY KEY AUTO_INCREMENT,
      author_id int not null,
      paper_id int not null,
      FOREIGN KEY (author_id) REFERENCES authors (author_id),
      FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
        );`,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    connection.query(
      `
    INSERT INTO authors(author_name, university, date_of_birth, h_index, gender, mentor) 
    VALUES  ('Elif', 'A University', '1996-08-13', 16, 'F', 1),
            ('Betul', 'B University', '1996-08-13', 17, 'F', 1),
            ('Munise', 'C University', '1996-08-13', 15, 'F', 1),
            ('Zeynep', 'D University', '1996-08-13', 15, 'F', 1),
            ('Eda', 'E University', '1996-08-13', 16, 'F', 1),
            ('Rabia', 'F University', '1996-08-13', 17, 'F', 1),
            ('Humeyra', 'G University', '1996-08-13', 18, 'F', 1),
            ('Emine', 'H University', '1996-08-13', 15, 'F', 1),
            ('Furkan', 'I University', '1996-08-13', 16, 'M', 1),
            ('Mehmet', 'J University', '1996-08-13', 16, 'M', 1),
            ('Burak', 'K University', '1996-08-13', 17, 'M', 1),
            ('Berke', 'L University', '1996-08-13', 15, 'M', 1),
            ('Selim', 'M University', '1996-08-13', 15, 'M', 1),
            ('Hakan', 'N University', '1996-08-13', 15, 'M', 1),
            ('Yagiz', 'O University', '1996-08-13', 15, 'M', 1);
    `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    connection.query(
      `
      INSERT INTO research_Papers(paper_title, conference, publish_date) 
      VALUES ('Research A', 'Conference 1', '1996-08-13'),
             ('Research B', 'Conference 2', '1996-08-13'),
             ('Research C', 'Conference 3', '1996-08-13'),
             ('Research D', 'Conference 4', '1996-08-13'),
             ('Research E', 'Conference 5', '1996-08-13'),
             ('Research F', 'Conference 6', '1996-08-13'),
             ('Research G', 'Conference 7', '1996-08-13'),
             ('Research H', 'Conference 8', '1996-08-13'),
             ('Research I', 'Conference 9', '1996-08-13'),
             ('Research J', 'Conference 10', '1996-08-13'),
             ('Research K', 'Conference 11', '1996-08-13'),
             ('Research L', 'Conference 12', '1996-08-13'),
             ('Research M', 'Conference 13', '1996-08-13'),
             ('Research N', 'Conference 14', '1996-08-13'),
             ('Research O', 'Conference 15', '1996-08-13'),
             ('Research P', 'Conference 16', '1996-08-13'),
             ('Research Q', 'Conference 17', '1996-08-13'),
             ('Research R', 'Conference 18', '1996-08-13'),
             ('Research S', 'Conference 19', '1996-08-13'),
             ('Research T', 'Conference 20', '1996-08-13'),
             ('Research U', 'Conference 21', '1996-08-13'),
             ('Research V', 'Conference 22', '1996-08-13'),
             ('Research Y', 'Conference 23', '1996-08-13'),
             ('Research Z', 'Conference 24', '1996-08-13'),
             ('Research AZ', 'Conference 25', '1996-08-13'),
             ('Research BY', 'Conference 26', '1996-08-13'),
             ('Research CV', 'Conference 27', '1996-08-13'),
             ('Research DU', 'Conference 28', '1996-08-13'),
             ('Research ET', 'Conference 29', '1996-08-13'),
             ('Research FS', 'Conference 30', '1996-08-13');
             
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    connection.query(
      `
      INSERT INTO authorsPaper( author_id, paper_id)
      VALUES 
      (1, 8), (1, 5), (2, 1), ( 2, 5 ), (3, 2), ( 3, 6), (4, 7), (4, 3), (5, 9), (5, 10),
      (6, 7), (6, 12), (4, 13), ( 7, 12 ), (8, 11)
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );
  }
});
