const express = require('express');
const app = express();
const path = require('path');
 

//setting
app.set('port', 1000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //motor de vista- de plantilla



//middlewares



//routes
app.use(require('./Routes/index.js'));



//static files
app.use(express.static(path.join(__dirname, 'public')));


//listening the server
app.listen(1000, () => {
    console.log('server on port', app.get('port'));
});

