Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/courses', {
	name: 'courses', 
	template: 'courses'
});


Router.route('/assignments', {
	name: 'assignments', 
	template: 'assignments'
});

Router.route('/register', {
	name: 'register',
	template: 'register'
})

Router.route('/login',{
	name: 'login',
	template: 'login'
})

Router.route('/grades',{
	name: 'grades',
	template: 'grades'
})

Router.route('/announcements',{
	name: 'announcements',
	template: 'announcements'
})

Router.onBeforeAction('loading');