const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactLogin'
})

connection.connect()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  var usersname = req.body.username;
  var userspassword  = req.body.password;

  connection.query('SELECT * from users', (err, rows, fields) => {
    if (err) throw err
      
    for (let num=0;num<rows.length;num++){
        if (rows[num].username == usersname & rows[num].password == userspassword){ 
         res.json({message:'user found', data: rows[num].id})
        }else{
          res.send('user not found please Signup')
        }
    }
  })
})

app.post('/signup', (req, res) => {
 var username = req.body.username;
 var email = req.body.email;
 var password = req.body.password;
 var age = req.body.age;

 var userFound = true;
 connection.query('SELECT * from users', (err, rows, fields) => {
  if (err) throw err
   
  for (num=0;num<rows.length;num++){
      if (rows[num].email == email){ 
        res.send("email already exit please Login or Try with Another Email");
          userFound = false;
      }
  }
  if (userFound){
   const insertQuery = 'INSERT INTO users (username, email, password,age) VALUES (?, ?, ?,?)';
   connection.query(insertQuery, [username, email, password,age], (err, result) => {
     if (err) throw err;
     res.send('User Created SuccessFully');
     console.log('New user inserted with ID:', result.insertId);
   });
  } else{
  
  }
})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})