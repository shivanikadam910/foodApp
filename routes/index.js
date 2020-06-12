 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//var http = require('http');
//var fs = require('fs');
var path = require('path');
var mysql = require('mysql');

// <script src="/js/jquery.min.js"></script>

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manasvi89",
  database: "temp_db"
});





router.post('/submit-form',(req,res) => {

    console.log(req.body.remail);
    console.log(req.body.runame);

    var mail=req.body.remail;
    var name=req.body.runame;
    var pass=req.body.rpass;

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO login (email,username,password) VALUES (?,?,?)";
      var todo = [mail,name,pass];
      con.query(sql, todo ,function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
     });
    });
    // res.sendFile(path.join(__dirname+'/first.html'));
});

router.post('/contact-form',(req,res) => {

    console.log(req.body.remail);
    console.log(req.body.runame);
    console.log(req.body.rarea);
    var mail=req.body.rmail;
    var name=req.body.rname;
    var num=req.body.rnum;
    var area=req.body.rarea;

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO contact (name,email,phone,message) VALUES (?,?,?,?)";
      var todo = [name,mail,num,area];
      con.query(sql, todo ,function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
     });
    });
    res.sendFile(path.join(__dirname+'/first.html'));
});


// app.get('/restaurant.html',(req,res) => {
//
//     con.query('SELECT * FROM hotel',(err,rows,fields) => {
//        if(!err){
//        res.send(rows);
//        }
//        else
//        console.log(err);
//     } );
//
// } );
//
//  app.get('/menu2.html/:id',(req,res) => {
//     con.query('SELECT * FROM menu WHERE rest_name = ?',[req.params.id],(err,rows,fields) => {
//         if(!err)
//         res.send(rows);
//         else
//         console.log(err);
//     })
// })


module.exports = router;
