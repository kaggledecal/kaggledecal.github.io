Lessons = new Mongo.Collection("lessons");
Lessons.attachSchema(new SimpleSchema({
	date: {
		type: Date
	},
	description: {
		type: String,
	},
	optional: {
		type:Boolean
	},
}));
