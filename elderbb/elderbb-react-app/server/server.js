const express = require('express'),
     bodyParser = require('body-parser'),
     cartCtrl = require('./controllers/cart.js'),
     cors = require('cors'),
     app = express();
     productsCtrl = require('./controllers/products')
app.use(cors());
app.use(bodyParser.json());


app.get('/api/products/white', productsCtrl.white);
app.get('/api/products/bio', productsCtrl.bio);
app.get('/api/products/tracer', productsCtrl.tracer);
app.get('/api/cart', cartCtrl.read);


const PORT = 3060;
app.listen(PORT, function() {
    console.log('Listening...'+ PORT)
});