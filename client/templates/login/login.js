Template.login.onRendered(function(){
});

Template.login.events({
    'submit .login': function(ev) {
        ev.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                var currentRoute = Router.current().route.getName();
                if(currentRoute == "login"){
                    Router.go("home");
                }
            }
        });
    }
})