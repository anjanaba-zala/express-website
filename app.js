const express = require('express')
const app = express()
app.use(express.static("public"));
app.get('/home', function (req, res) {
//   res.send('Hello World')
  res.sendFile(__dirname+ '/views/home.html');
})
app.get('/about', function (req, res) {
    // res.send('Hello About')
    res.sendFile(__dirname+ '/views/about.html');
  })
  app.get('/contact', function (req, res) {
    // res.send('Hello Contact')
    res.sendFile(__dirname+ '/views/contact.html');
  })
  app.get('/cake/amd', function (req, res) {
    res.send('Hello amd cake')
  })
  app.get('/cake/surat', function (req, res) {
    res.send('Hello surat cake')
  })
  app.get('/cake/bhuj', function (req, res) {
    res.send('Hello Cake bhuj')
  })

app.listen(3000)