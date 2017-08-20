var shelves = [{"bin": 1, "shelf": 'A'}, {"bin": 2, "shelf": 'A'}, {"bin": 3, "shelf": 'A'}, null, null]

var bin = [{'bin': 1, 'shelf': 'A', 'item': 'sneakers', 'price': '23.34'}]

module.exports = {
    getShelves: (req, res) => {
        // console.log(req.params.id)
        // req.app.get('db').get_shelves().then((response) => {
        //     res.send(response)
        // })
        res.send(shelves)

    },

    getBin: (req, res) => {
        res.send(bin)
    },

    editBin: (req, res) => {
        res.send('editing')
    },

    deleteBin: (req, res) => {
        res.send('deleting')
    },

    createBin: (req, res) => {
        res.send('creating')
    },
}