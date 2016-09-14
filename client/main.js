import { Template } from 'meteor/templating';
import './main.html';

Template.syllabus.helpers({
	lessons:function() {
		return Lessons.find({});
	},

    formatDate:function(date) {
        let format = "ddd MM/DD";
        return moment(date).format(format);
    },

    isOdd:function(index) {
        if(index % 2 === 0) {
          return true;
        } else {
          return false;
        }
    },

    hasVideo:function() {
        return false;
    }
});
//
// Accounts.onLogin(function() {
//     let redirect = Session.get('redirectAfterLogin');
//     if (redirect != null) {
//         if (redirect !== '/login') {
//             return FlowRouter.go(redirect);
//         }
//     }
// });
