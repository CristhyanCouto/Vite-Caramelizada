const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

//Routers
const actorsRoute = require('./routes/actorsRoute');
app.use('/actors', actorsRoute);

const animesRoute = require('./routes/animesRoute');
app.use('/animes', animesRoute);

const booksRoute = require('./routes/booksRoute');
app.use('/books', booksRoute);

const creatorsRoute = require('./routes/creatorsRoute');
app.use('/creators', creatorsRoute);

const currentStatusEnsRoute = require('./routes/currentStatusEnsRoute');
app.use('/currentStatusEns', currentStatusEnsRoute);

const currentStatusPtsRoute = require('./routes/currentStatusPtsRoute');
app.use('/currentStatusPts', currentStatusPtsRoute);

const directorsRoute = require('./routes/directorsRoute');
app.use('/directors', directorsRoute);

const gamesRoute = require('./routes/gamesRoute');
app.use('/games', gamesRoute);

const genreEnsRoute = require('./routes/genreEnsRoute');
app.use('/genreEns', genreEnsRoute);

const genrePtsRoute = require('./routes/genrePtsRoute');
app.use('/genrePts', genrePtsRoute);

const moviesRoute = require('./routes/moviesRoute');
app.use('/movies', moviesRoute);

const plataformsRoute = require('./routes/plataformsRoute');
app.use('/plataforms', plataformsRoute);

const producersRoute = require('./routes/producersRoute');
app.use('/producers', producersRoute);

const publisherBooksRoute = require('./routes/publisherBooksRoute');
app.use('/publisherBooks', publisherBooksRoute);

const publisherGamesRoute = require('./routes/publisherGamesRoute');
app.use('/publisherGames', publisherGamesRoute);

const ratedPgEnsRoute = require('./routes/ratedPgEnsRoute');
app.use('/ratedPgEns', ratedPgEnsRoute);

const ratedPgPtsRoute = require('./routes/ratedPgPtsRoute');
app.use('/ratedPgPts', ratedPgPtsRoute);

const seasonsAnimesRoute = require('./routes/seasonsAnimesRoute');
app.use('/seasonsAnimes', seasonsAnimesRoute);

const seasonsSeriesRoute = require('./routes/seasonsSeriesRoute');
app.use('/seasonsSeries', seasonsSeriesRoute);

const seriesRoute = require('./routes/seriesRoute');
app.use('/series', seriesRoute);

const writersRoute = require('./routes/writersRoute');
app.use('/writers', writersRoute);

const serverPort = process.env.SERVER_PORT || 3001;

db.sequelize.sync().then(() => {
    app.listen(serverPort, () => {
        console.log(`Server is running on port ${serverPort}`);	
    });
});