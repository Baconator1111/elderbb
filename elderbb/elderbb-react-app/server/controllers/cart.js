var cart = [];

module.exports = {
    read: function(req, res) {
        res.status(200).send(cart);
    },
    create: (req, res)=> {
        cart.push(req.body)
        // console.log('consol?', cart)
        // if(cart===null){
        //     console.log(cart)
        //     cart.push(req.body)
        //     console.log(cart)
        // } else{
        // let newCart = cart.map((item)=>{
        //     if(item.product === req.body.product){
        //      item.quantity+= req.body.qty
        //      return item
        //     } else {
        //         cart.push(req.body)
        //         return item
        //     }
            
        //   }) 
        //   cart = newCart
        // }
          
        res.status(200).send('Item added to cart')
    },
    update: (req, res)=>{
        let newCart = cart.map((item)=>{
            if(item.product === req.params.prodName){
             item.qty = Number(req.params.qty)
             return item
            } else {return item}
          })
          cart = newCart
          res.status(200).send('Item quantity updated')
    },
    delete: (req, res)=>{
        let newCart = cart.filter((item)=>item.product !== req.params.prodName)
        cart = newCart
        res.status(200).send('Item Deleted from cart')
    }

}