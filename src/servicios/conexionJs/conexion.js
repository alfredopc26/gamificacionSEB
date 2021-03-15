var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.16.2.2",
  user: "root",
  password: "Hola4Root",
  database: "ibes"
});

con.connect(function(err) {

var sql="select * from usuario where id='carlosp'";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(Object.values(result));


    
  });
});