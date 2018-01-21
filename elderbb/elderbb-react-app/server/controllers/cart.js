var cart = [];


module.exports = {
    read: function(req, res) {
        res.status(200).send(cart);
    },
    create: (req, res)=> {
        cart.push(req.body)
        // console.log('consol?', cart)
        // if(cart.length===0){
        //     cart.push(req.body)
        // } else{
        // let newCart = cart.map((item)=>{
        //     if(item.product === req.body.product){
        //      item.qty+= req.body.qty
        //      return item
        //     } else {return ({...item, req.body})}
            
        //   }) 
        //   cart = newCart
        //   }
        
          
        res.status(200).json(cart)
    },
    update: (req, res)=>{
        let newCart = cart.map((item)=>{
            if(item._id === req.params._id){
             item.qty = Number(req.params.qty)
             return item
            } else {return item}
          })
          cart = newCart
          res.status(200).json(cart)
    },
    delete: (req, res)=>{
        console.log('delete hit', req.params._id)
        let newCart = cart.filter((item)=>item._id !== req.params._id)
        cart = newCart
        res.status(200).json(cart)
    }

}