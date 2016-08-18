Lessons = new Mongo.Collection("lessons");
Lessons.attachSchema(new SimpleSchema({
	dates: {
		type: [Date]
	},
	description: {
		type: String,
	},
	optional: {
		type:Boolean,
		optional:true,
		defaultValue:false
	},
	link: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional:true
	}
}));
