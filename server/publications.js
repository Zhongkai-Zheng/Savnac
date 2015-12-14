Meteor.publish('images', function(limit) {
  check(limit, Number);

  return Images.find({}, {
    limit: limit
  });
});

Meteor.publish('assignments', function() {
	return AssignmentsList.find();
})

Meteor.publish('courses', function() {
	return Courses.find();
})

Meteor.publish('subscriptions', function() {
	return Subscriptions.find({target: this.userId});
})