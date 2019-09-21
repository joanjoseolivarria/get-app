const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //  res.sendFile('');
    //res.sendFile(path.join(__dirname, '/views/index.html')); //path y __dirname
    res.render('index.html', { title:  'Get App'});
});


router.get('/contact', (req, res) => {
  //  res.sendFile('');
  //res.sendFile(path.join(__dirname, '/views/index.html')); //path y __dirname
  res.render('contact.html', {title: 'Contac Page'});
});


module.exports = router;