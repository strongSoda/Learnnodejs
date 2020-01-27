// inserting data
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
    let s = "INSERT INTO customers (name, address) VALUES ?";
    
    const values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];

    con.query(s, [values], (err, result) => {
        if (err) throw err;
        console.log(`Rows inserted ${result.affectedRows}`);
    });

    // get last insert id
    s = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(s, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});