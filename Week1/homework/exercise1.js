const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elifn1996',
  database: 'meetup',
});

connection.connect();

connection.query('DROP DATABASE IF EXISTS meetup');
connection.query('CREATE DATABASE meetup');
connection.query('USE meetup');

connection.query(
  `CREATE TABLE Invitee(
      invitee_no INT, invitee_name VARCHAR(50), invited_by VARCHAR(50)
    )`,
);

connection.query(
  `CREATE TABLE Room(
      room_no INT, room_name VARCHAR(50), floor_number INT
   )`,
);

connection.query(
  `CREATE TABLE Meeting(
      meeting_no INT, meeting_title VARCHAR(50), starting_time DATETIME, ending_time DATETIME, room_no INT)`,
);

connection.query(
  `INSERT INTO Invitee 
          VALUES 
            (1, 'Elif', 'Asiye'),
            (2, 'Asiye', 'Betul'),
            (3, 'Betul', 'Zeynep'),
            (4, 'Zeynep', 'Humeyra'),
            (5, 'Humeyra', 'Elif')`,
);

connection.query(
  `INSERT INTO Room 
       VALUES 
         (1, 'Room 1', 7),
         (2, 'Room 2', 2),
         (3, 'Room 3', 5),
         (4, 'Room 4', 9),
         (5, 'Room 5', 4)`,
);

connection.query(
  `INSERT INTO Meeting 
      VALUES 
        (1, 'StandUp', '2022-04-04 09:00:00', '2022-04-08 17:00:00', 101),
        (2, 'EventOrganization', '2022-04-11 09:00:00', '2022-04-15 17:00:00', 201),
        (3, 'Interview', '2022-04-18 09:00:00', '2022-04-22 17:00:00', 301),
        (4, 'New Techs', '2022-04-25 09:00:00', '2022-04-29 17:00:00', 401),
        (5, 'Entertainment', '2022-05-02 09:00:00', '2022-05-06 17:00:00', 501)`,
);
