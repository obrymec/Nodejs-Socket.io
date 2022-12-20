// Attributes.
const express = require ("express"), app = express (), http = require ("http").createServer (app);
const io = require ("socket.io") (http), port = process.env.PORT || 5000;

// App configurations.
app.use (express.static (__dirname));
// App main web page.
app.get ('/', (req, res) => res.sendFile ("index.html", new Object ({root: __dirname})));
// App socket io system simple implementation.
io.on ("connection", socket => socket.on ("user-message", message => io.emit ("server-result", message)));
// App server listen: 3000.
http.listen (port, "localhost", () => console.log ("Server started at port: ", port));
