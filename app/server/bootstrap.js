Meteor.startup(function () {
    ServiceConfiguration.configurations.remove({
        service: 'wordpress'
    });

    ServiceConfiguration.configurations.insert({
        service: 'wordpress',
        clientId: process.env.wp_oauth_clientId,
        secret: process.env.wp_oauth_secret,
        authServerURL: 'http://jobboard.myfantasticdomain.com'
    });
    _.extend(Meteor.settings,{ wp_oauth_accept_invalid_certs: true });

});
