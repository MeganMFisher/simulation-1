var shelves = [{"bin": 1, "shelf": 'A'}, {"bin": 2, "shelf": 'A'}, {"bin": 3, "shelf": 'A'}, null, null]

module.exports = {
    getShelves: (req, res) => {
        // console.log(req.params.id)
        // req.app.get('db').get_shelves().then((response) => {
        //     res.send(response)
        // })
        res.send(shelves)

    },

    getBin: (req, res) => {
        res.send('getting')
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