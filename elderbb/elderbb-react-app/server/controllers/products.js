const productList = {
    white: [{
        product: 'White .20g',
        amount: '1kg 5000 count',
        price: '12.00',
        qty: 1
    },{
        product: 'White .25g',
        amount: '1kg 4000 count',
        price: '13.50',
        qty: 1
    },{
        product: 'White .30g',
        amount: '1kg 3350 count',
        price: '15.00',
        qty: 1
    },{
        product: 'White .32g',
        amount: '1kg 3125 count',
        price: '17.00',
        qty: 1
    },{
        product: 'White .36g',
        amount: '1kg 2750 count',
        price: '20.00',
        qty: 1
    },{
        product: 'White .40g',
        amount: '1kg 2500 count',
        price: '22.00',
        qty: 1
    },{
        product: 'White .43g',
        amount: '1kg 2350 count',
        price: '24.00',
        qty: 1
    }],
    biodegradable: [{
        product: 'biodegradable .20g',
        amount: '1kg 5000 count',
        price: '15.00',
        qty: 1
    },{
        product: 'biodegradable .25g',
        amount: '1kg 4000 count',
        price: '16.50',
        qty: 1
    },{
        product: 'biodegradable .28g',
        amount: '1kg 3575 count',
        price: '17.50',
        qty: 1
    },{
        product: 'biodegradable .30g',
        amount: '1kg 3350 count',
        price: '18.00',
        qty: 1
    },{
        product: 'biodegradable .25g',
        amount: '1kg 4000 count',
        price: '16.50',
        qty: 1
    }],
    tracer: [{
        product: 'tracer .25g',
        amount: '.5kg 2000 count',
        price: '14.00',
        qty: 1
    }]
}

module.exports = {
        read: (req, res, next)=>{
            switch(req.query.type){
                case 'white': 
                    res.status(200).send(productList.white)
                    break;
                case 'bio':
                    res.status(200).send(productList.biodegradable)
                    break;
                case 'tracer': 
                    res.status(200).send(productList.tracer)
                    break;
                default:
                    res.status(404).send('item does not exist')
            }
        }
}