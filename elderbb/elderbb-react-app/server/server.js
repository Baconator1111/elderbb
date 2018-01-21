const express = require('express'),
     bodyParser = require('body-parser'),
     cors = require('cors'),
     app = express();
     cartCtrl = require('./controllers/cart'),
     productsCtrl = require('./controllers/products')
app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', productsCtrl.read);
// app.get('/api/products/white', productsCtrl.white);
// app.get('/api/products/bio', productsCtrl.bio);
// app.get('/api/products/tracer', productsCtrl.tracer);
app.post('/api/cart/', cartCtrl.create);
app.get('/api/cart', cartCtrl.read);
app.put('/api/cart/:_id/:qty', cartCtrl.update);
app.delete('/api/cart/:_id', cartCtrl.delete);


const PORT = 3060;
app.listen(PORT, function() {
    console.log(`Listening to port ${PORT}`)
}); 