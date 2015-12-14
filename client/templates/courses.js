Template.courses.events({
	'submit form': function(ev){
		ev.preventDefault();
		var courseName = $('[name="courseName"]').val();
		Meteor.call('addCourse', courseName, function(err) {});
	},
	'click .course': function() {
		Meteor.call('toggleSubscription', this._id, function(err) {});
	}
});

Template.courses.helpers({
	'course': function() {
		return Courses.find();
	},
	'teacherEmail': function() {
		try {
			return Meteor.users.findOne(this.teacher).profile.email;
		} catch (err) {};
	},
	'subscribedColor': function() {
		return Subscriptions.find({course: this._id}).count() > 0 ? 'text-success' : '';
	}
})