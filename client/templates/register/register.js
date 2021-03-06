Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                email: email
            }
        });
        Router.go('home');
    }
});

Template.register.onRendered(function(){
    $('.register').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
            },
            password: {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters."
            }
        }
    });
});

Template.register.onRendered(function(){
    $('.register').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
var password = $('[name=password]').val();
Accounts.createUser({
    email: email,
    password: password
}, function(error){
    if(error){
        console.log(error.reason);
    } else {
        Router.go("home");
    }
});
            // code goes here
        }    
    });
});
