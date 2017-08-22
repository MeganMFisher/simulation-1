
var bin = [{'shelf': 'A', 'bin': 1, 'id': 'A1', 'item': 'Sneakers', 'price': '$23.34', 'image': 'http://static.highsnobiety.com/wp-content/uploads/2017/03/10120857/best-adidas-sneakers-2017-feature-july-320x192.jpg'}, {'shelf': 'A', 'bin': 2, 'id': 'A2', 'item': 'Nikes', 'price': '$86.34', 'image': 'https://s-media-cache-ak0.pinimg.com/736x/ef/8a/4e/ef8a4e5929003c4102d571cfd2b998b9--black-nikes-nike-shoes-roshe-black.jpg'}, {'shelf': 'A', 'bin': 3, 'id': 'A3', 'item': null, 'price': null, 'image': null}, {'shelf': 'A', 'bin': 4, 'id': 'A4', 'item': null, 'price': null, 'image': null}, {'shelf': 'A', 'bin': 5, 'id': 'A5', 'item': null, 'price': null, 'image': null}]


module.exports = {
    getShelves: (req, res) => {
        // req.app.get('db').get_shelves().then((response) => {
        //     res.send(response)
        // })

        var shelfArray = []
        bin.map(e => {
            if(e.shelf == req.params.id) {
                shelfArray.push(e)
            }
        })
        res.send(shelfArray)

    },

    getBin: (req, res) => {
        singleBin = []
        bin.map(e => {
           if(e.id == req.params.id) {
           singleBin.push(e)
           }
        })
        res.send(singleBin)
    },

    editBin: (req, res) => {
        bin.map(e => {
           if(e.id == req.params.id) {
               e.item = req.body.item
               e.price = req.body.price
           }
        })
        res.send('edited')
    },

    deleteBin: (req, res) => {
        bin.map(e => {
            if(e.id == req.params.id) {
                console.log(bin.item)
                console.log(e.item)
                e.item = null
                e.price = null
                e.image = null
            }
        })
        res.send('deleting')
    },

    createBin: (req, res) => {
        bin.map(e => {
            if(e.id == req.params.id) {
                e.item = req.body.item
                e.price = req.body.price
                e.image = req.body.image
            }
        })
        res.send('creating')
    },
}