module.exports = {
    getShelves: (req, res) => {
        // console.log(req.params.id)
        req.app.get('db').getShelves().then((response) => {
            res.send(response)
        })
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