/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'submit .new-task ':function(e){
        e.preventDefault();
        console.log(e.target);
        Meteor.call('wpOauth', function (error, result) {
            console.log(result);
            Session.set("oauth",result);
        } );
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    oauthInfo: function() {
        return Session.get("oauth");
    }

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {

};

Template.Home.rendered = function () {

};

Template.Home.destroyed = function () {
};
