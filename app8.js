// connect to dB & create table
const sql = require('mysql');

const con = sql.createConnection({
    host: 'localhost',
    user: 'imran',
    password: 'imran',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    con.query('CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))', (err) => {
        if (err) throw err;
        console.log('Table Created!');
    });
});