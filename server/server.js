const server = (express = require('express'))()
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'));
};

server.use('/api/', require('./routes/user-routes'));
server.use('/api/', require('./routes/image-upload'));

server.listen(PORT = process.env.PORT || 3001, () => console.log(`server listening on ${PORT}`));4 


