module.exports = {
    get: (request, response) => {
        const db = request.app.get('db')
        db.get_inventory()
        .then(inventory => {
            response.status(200).send(inventory)
        })
    },
    add: (request, response) => {
        const db = request.app.get('db')
        let { name, price, image } = request.body
        db.create_product({name, price, image})
        .then(product => {
        response.status(200).send(product)
        })
    },
    delete: (request,response) => {
        const db = request.app.get('db')
        let { id } = request.params
        db.delete_product({ id })
        .then(products => {
            response.status(200).send(products)
        })
    }
}