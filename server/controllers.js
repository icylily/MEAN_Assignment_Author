const Author = require('./models');

module.exports = {

    getAllAuthors: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
        // .then(data => console.log(data) || res.json(data))
        // .catch(err => console.log(err) || res.json(err));
    },

    getOneAuthor: (req, res) => {
        const ID = req.params.id;
        Author.findOne({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },


    createAuthor: (req, res) => {
        const DATA = req.body;
        Author.create(DATA)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateAuthorVote: (req, res) => {
        // author :any = {};
        // console.log("update vote");
        const author_id = req.params.author_id;
        const quote_id = req.params.quote_id;
        const vote = req.params.vote;
        Author.findOneAndUpdate({_id:author_id,'quotes._id':quote_id},{$set:{"quotes.$.vote":vote}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    updateAuthorQuote: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Author.findOneAndUpdate({ _id: ID }, { $push: { quotes: DATA}} , { runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteAuthorQuote:(req,res) =>{
        const author_id = req.params.author_id;
        const quote_id = req.params.quote_id;
        Author.findOneAndUpdate({ _id: author_id }, { $pull: { quotes: {_id:quote_id} } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteAuthor: (req, res) => {
        const ID = req.params.id;
        Author.findOneAndDelete({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}