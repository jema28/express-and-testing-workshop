/* We split he server out into a different file so that our tests don't hang
because the server is listening still */
const app = require('./server.js');
const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Things, the things are happening on ${port}!!`));
