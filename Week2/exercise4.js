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

    //All research papers and the number of authors that wrote that paper.
    connection.query(
      `
      SELECT research_Papers.paper_title, count(authorsPaper.author_id) AS authors_count 
      FROM research_Papers 
      INNER JOIN authorsPaper 
      ON research_Papers.paper_id = authorsPaper.paper_id 
      GROUP BY research_papers.paper_title;
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    //Sum of the research papers published by all female authors.
    connection.query(
      `
      SELECT gender, COUNT(paper_title) FROM authors
      JOIN authorsPaper
      ON authorsPaper.author_id = authors.author_id
      JOIN research_papers
      ON research_papers.paper_id = authorsPaper.paper_id
      WHERE authors.gender = 'F';
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    //Average of the h-index of all authors per university.
    connection.query(
      `
      SELECT university, AVG(h_index)  
      FROM authors
      GROUP BY university;
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    //Sum of the research papers of the authors per university.
    connection.query(
      `
      SELECT university, COUNT(authorsPaper.paper_id) AS sum_of_research_papers 
      FROM authors 
      INNER JOIN authorsPaper 
      ON authors.author_id = authorsPaper.author_id
      GROUP BY university;
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );

    //Minimum and maximum of the h-index of all authors per university.
    connection.query(
      `
      SELECT university, MIN(h_index), MAX(h_index) 
      FROM authors
      GROUP BY university;
      `,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      },
    );
  }
});
