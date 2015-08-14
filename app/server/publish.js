/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('settings', function (/* args */) {
    this.added("settings", 'applicationSettings',Meteor.settings);
    this.ready();

});