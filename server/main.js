import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name",
    func: function(value){return value !== 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});
