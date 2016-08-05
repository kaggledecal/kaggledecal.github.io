import { Template } from 'meteor/templating';
import './main.html';

Template.syllabus.helpers({
	lessons:function() {
		return Lessons.find({});
	}
});
