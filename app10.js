// select & other sql
const sql = require('mysql');

const con = sql.createConnection({
    host: 'localhost',
    user: 'imran',
    password: 'imran',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connceted!');
    con.query('SELECT * FROM customers', (err, result, fields) => {
        if (err) throw err;
        console.log(`Result: ${JSON.stringify(result, null, 4)}`);
        console.log(`Fields: ${JSON.stringify(fields, null, 4)}`);
    });
    // where clause
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    // wildcard chars
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    // order by clause
    con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    // limit results & offset
    let s = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(s, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.end();
});


