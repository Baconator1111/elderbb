var cart = [];

module.exports = {
    getTodos: function(req, res) {
        cart.push(req.body)
        res.status(200).send(todos);
    }
}