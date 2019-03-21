const authorControllers = require('./controllers');
const path = require('path')
module.exports = app => {

    app
        .get('/api/authors', authorControllers.getAllAuthors)
        .get('/api/authors/:id', authorControllers.getOneAuthor)
        .post('/api/authors', authorControllers.createAuthor)
        .get('/api/authors/vote/:author_id/:quote_id/:vote', authorControllers.updateAuthorVote)
        .put('/api/authors/quote/:id', authorControllers.updateAuthorQuote)
        .delete('/api/authors/:id', authorControllers.deleteAuthor)
        .delete('/api/authors/:author_id/:quote_id',authorControllers.deleteAuthorQuote)
        .all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}