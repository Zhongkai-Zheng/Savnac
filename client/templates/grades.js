GradesList = new Mongo.Collection('grades');

if(Meteor.isClient){

  Template.grades.helpers({
    'grade': function(){
        return GradesList.find()
    },
    'selectedClass': function(){
      var gradeId = this._id;
      var selectedGrade = Session.get('selectedGrade');
      if(gradeId == selectedGrade){
          return "selected"
      }
    }
  });

    Template.grades.events({
	'submit form': function(){
		event.preventDefault();
		var gradeNameVar = event.target.gradeName.value;
        var submitter = Meteor.user().emails[0].address
		GradesList.insert({
		name: gradeNameVar,
		owner: submitter
		});
	}
});

    Template.grades.events({
	'click .remove': function(){
		var selectedGrade = Session.get('selectedGrade');
		GradesList.remove(selectedGrade);
	}
});
    
}