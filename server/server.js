bounceLoggedOut = function() {
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized', 'you need to be logged in for that!');
	}
}


Meteor.methods({
	'addAssignment': function(course, name) {
		bounceLoggedOut();
		check(name, String);
		check(course, String);

		return AssignmentsList.insert({
			name: name,
			course: course,
			owner: Meteor.userId()
		})
	},
	'removeAssignment': function(assignment) {
		bounceLoggedOut();
		check(assignment, String);

		return AssignmentsList.remove(assignment);
	},
	'addCourse': function(courseName) {
		bounceLoggedOut();
		check(courseName, String);

		return Courses.insert({
			name: courseName,
			teacher: Meteor.userId()
		})
	},
	'subscribeToClass': function(classid) {
		bounceLoggedOut();
		check(classid, String);

		return Subscriptions.insert({
			target: Meteor.userId(),
			course: classid
		})
	},
	'unsubscribeFromClass': function(classid) {
		bounceLoggedOut();
		check(classid, String);

		return Subscriptions.remove({
			target: Meteor.userId(),
			course: classid
		})
	},
	'toggleSubscription': function(classid) {
		bounceLoggedOut();
		check(classid, String);

		if (Subscriptions.find({target: Meteor.userId(), course: classid}).count() > 0) {
			return Subscriptions.remove({
				target: Meteor.userId(),
				course: classid
			})
		} else {
			return Subscriptions.insert({
				target: Meteor.userId(),
				course: classid
			})
		}
	}
})