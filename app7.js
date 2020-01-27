// sql connect & create dB
const sql = require('mysql');

const con = sql.createConnection({
    host: 'localhost',
    user: 'imran',
    password: 'imran'
});

con.connect((err) => {
    if (err) throw err;
    console.log('connected!');
    con.query('CREATE DATABASE mydb', (err, result) => {
        if (err) throw err;
        console.log('DB created!');
    });
});