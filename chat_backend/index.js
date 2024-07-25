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

 
var aiUserCheckup =  false;

app.post('/signup', async (req, res) => {
  const { username, email, password, age } = req.body;

  try {
    const manualUserCheckup = await manualCheckTheUsers(username, email, password, age);
    if (manualUserCheckup) {
      return res.status(400).send('Possible duplicate user detected. Please use a different email or contact support.');
    }

    const users = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length > 0) {
      return res.status(400).send('Email already exists. Please login or try with another email.');
    }

    const insertQuery = 'INSERT INTO users (username, email, password, age) VALUES (?, ?, ?, ?)';
    const result = await connection.query(insertQuery, [username, email, password, age]);

    res.send('User created successfully');
    console.log('New user inserted with ID:', result.insertId);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

async function manualCheckTheUsers(username, email, password, age) {
  try {
    const rows = await connection.query('SELECT * FROM users');
    let percentageCount = 0;

    rows.forEach(row => {
      if (row.username === username) {
        percentageCount += 10;
        console.log("username matches");
      }
      if (row.username === username && row.age === age) {
        percentageCount += 30;
        console.log("username and age also matched");
      }
      if (row.username === username && row.age === age && row.password === password) {
        percentageCount += 50;
        console.log("username, age, password also matched. Possible duplicate user.");
      }
    });

    return percentageCount >= 50;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});