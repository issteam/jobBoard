/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
var asyncFunc = function(callback){
    setTimeout(function(){
        // callback(error, result);
        // success :
        callback(null,"result");
        // failure:
        // callback(new Error("error"));
    },2000)
}
var syncFunc = Meteor.wrapAsync(asyncFunc);

Meteor.methods({
    wpOauth: function () {
        console.log('wpOauth started');
        HTTP.call("POST", "http://jobboard.myfantasticdomain.com/?oauth=token",
            {
                headers: {
                    "Authorization": "Basic WFQzc1M2em1oRjlmeW5GQWZaSXh3VzNEWUYzY3dvOjF1aDVYYWN4eHRjSEpMNG9sa28zUlUwVnlZQUNiNw==",
                    "Content-type": "application/x-www-form-urlencoded"
                },

                data: {
                    "grant_type": "password",
                    "username": "u",
                    "password": "pass"
                }
            },
            function (error, result) {
                if (!error) {
                   return result;
                    /*Session.set("result", result);*/

                }
            });
        /*console.log(Session.get('result'));  */
    }
});
