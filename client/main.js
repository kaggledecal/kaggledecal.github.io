import { Template } from 'meteor/templating';
import './main.html';

Template.syllabus.helpers({
	lessons:function() {
		return Lessons.find({});
	},

    isOdd:function(index) {
        if(index % 2 === 0) {
          return true;
        } else {
          return false;
        }
    }
});
