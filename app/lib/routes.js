Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});
function makeToObject(str){
    var result = {}, name;
    str.split(/&|=/).forEach(function(item, idx){
        idx%2 ? (result[name] = item) : (name = item);
    });
    return result;
}


