'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */



module.exports = () => {
    const io = require('socket.io')(strapi.server, {
        cors: {
            origin: process.env.FRONTEND_URL,
            methods: ['GET', 'POST']
        }
    });

    //expose io so it can be used everywhere
    strapi.io = io;

    io.on('connection', socket => {
        //console.log(socket);
    })

};