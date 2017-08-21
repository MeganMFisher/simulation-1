var shelves = [{"bin": 1, "shelf": 'A'}, {"bin": 2, "shelf": 'A'}, {"bin": 3, "shelf": 'A'}, {"bin": null, "shelf": 'A'}, {"bin": null, "shelf": 'A'}]

var bin = [{'bin': 1, 'shelf': 'A', 'item': 'Sneakers', 'price': '$23.34', 'image': 'http://static.highsnobiety.com/wp-content/uploads/2017/03/10120857/best-adidas-sneakers-2017-feature-july-320x192.jpg', 'id': 'A1'},{'bin': 1, 'shelf': 'A', 'item': 'Nikes', 'price': '$83.34', 'image': 'http://static.highsnobiety.com/wp-content/uploads/2017/03/10120857/best-adidas-sneakers-2017-feature-july-320x192.jpg', 'id': 'A2'}]

module.exports = {
    getShelves: (req, res) => {
        // console.log(req.params.id)
        // req.app.get('db').get_shelves().then((response) => {
        //     res.send(response)
        // })

        var shelfArray = []
        shelves.map(e => {
            if(e.shelf == req.params.id) {
                shelfArray.push(e)
            }
        })
        res.send(shelfArray)

    },

    getBin: (req, res) => {
        singleBin = []
        bin.map(e => {
           e.id == req.params.id
           console.log(e.id)
           console.log(req.params.id)
           singleBin.push(e)
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
                bin.splice(e, 1, null)
            }
        })
        console.log(bin)
        res.send('deleting')
    },

    createBin: (req, res) => {
        res.send('creating')
    },
}