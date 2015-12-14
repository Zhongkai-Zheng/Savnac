Template.assignments.rendered = function() {
  Session.set('clickedAssignment', null);
}


Template.assignments.helpers({
  'assignment': function(){
    return AssignmentsList.find()
  },
  'selectedClass': function(){
    var assignmentId = this._id;
    var selectedGrade = Session.get('selectedGrade');
    if(assignmentId == selectedGrade){
      return "selected"
    }
  },
  'ownerEmail': function() {
    try {
      return Meteor.users.findOne(this.owner).profile.email;
    } catch (err) {};
  },
  'subscription': function() {
    return Subscriptions.find({target: Meteor.userId()});
  },
  'course': function() {
    return Courses.findOne(this.course);
  },
  'courseAssignment': function() {
    return AssignmentsList.find({course: this._id});
  },
  'selectCourse': function() {
    return Courses.find();
  },
  'clickedAssignment': function() {
    return this._id == Session.get('clickedAssignment') ? 'text-primary' : '';
  }
});

Template.assignments.events({
 'submit form': function(ev){
    ev.preventDefault();
    var assignmentNameVar = $('[name="assignmentName"]').val();
    var courseID = $('[name="courseSelect"]').val();
    console.log(courseID);
    Meteor.call('addAssignment', courseID, assignmentNameVar, function(err) {
      if (err != null) {
        // do something here
      }
      $('[name="assignmentName"]').val('');
    })
  },
 'click .remove': function(){
    var selectedGrade = Session.get('selectedGrade');
    AssignmentsList.remove(selectedGrade);
  },
  'click .assignment': function() {
    Session.set('clickedAssignment', this._id);
  },
  'click #removeAssignment': function() {
    if (Session.get('clickedAssignment') == null) {
      return;
    }
    Meteor.call('removeAssignment', Session.get('clickedAssignment'), function(err) {});
  }
});