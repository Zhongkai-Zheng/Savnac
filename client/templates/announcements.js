AnnouncementsList = new Mongo.Collection('announcements');

if(Meteor.isClient){

  Template.announcements.helpers({
    'announcement': function(){
        return AnnouncementsList.find()
    },
    'selectedClass': function(){
      var announcementId = this._id;
      var selectedAnnouncement = Session.get('selectedAnnouncement');
      if(announcementId == selectedAnnouncement){
          return "selected"
      }
    }
  });

    Template.announcements.events({
	'submit form': function(){
		event.preventDefault();
		var announcementNameVar = event.target.announcementName.value;
        var submitter = Meteor.user().emails[0].address
		AnnouncementsList.insert({
		name: announcementNameVar,
		owner: submitter
		});
	}
});

    Template.announcements.events({
	'click .remove': function(){
		var selectedAnnouncement = Session.get('selectedAnnouncement');
		AnnouncementsList.remove(selectedAnnouncement);
	}
});
    
}