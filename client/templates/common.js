Meteor.startup(function() {
	Meteor.subscribe('assignments');
	Meteor.subscribe('courses')
	Meteor.subscribe('subscriptions')
})