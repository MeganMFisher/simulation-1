
var bin = [{'shelf': 'A', 'bin': 1, 'id': 'A1', 'item': 'Sneakers', 'price': '$23.34', 'image': 'http://static.highsnobiety.com/wp-content/uploads/2017/03/10120857/best-adidas-sneakers-2017-feature-july-320x192.jpg'}, {'shelf': 'A', 'bin': 2, 'id': 'A2', 'item': 'Nikes', 'price': '$86.34', 'image': 'https://s-media-cache-ak0.pinimg.com/736x/ef/8a/4e/ef8a4e5929003c4102d571cfd2b998b9--black-nikes-nike-shoes-roshe-black.jpg'}, {'shelf': 'A', 'bin': 3, 'id': 'A3', 'item': null, 'price': null, 'image': null}, {'shelf': 'A', 'bin': 4, 'id': 'A4', 'item': null, 'price': null, 'image': null}, {'shelf': 'A', 'bin': 5, 'id': 'A5', 'item': null, 'price': null, 'image': null}]


module.exports = {
    getShelves: (req, res) => {
        req.app.get('db').get_shelves(req.params.id).then((response) => {
            res.send(response)
        })

    },

    getBin: (req, res) => {
        req.app.get('db').get_bin(req.params.id).then((response) => {
            res.send(response)
        })
    },

    editBin: (req, res) => {
        let params = [
            req.params.id,
            req.body.item,
            req.body.price
        ]

        req.app.get('db').edit_bin(params).then((response) => {
            res.send(response)
        })

    },

    deleteBin: (req, res) => {
        req.app.get('db').delete_bin(req.params.id).then((response) => {
            res.send(response)
        })
    },

    createBin: (req, res) => {
        let params = [
            req.body.item,
            req.body.price,
            req.body.image,
            req.params.id
        ]
        console.log(params)
        req.app.get('db').create_bin(params).then((response) => {
            res.send(response)
        })

    },
}