Meteor.startup(() => {
	if(Lessons.find().count() === 0){
		console.log('seeding db w/ syllabus.json');
		lessons = JSON.parse(Assets.getText("lessons.json"));
		for(let i = 0; i < lessons.length; i++){
			let dates = lessons[i].dates;
			for(let j = 0; j < dates.length; j++){
				dates[j] = new Date(dates[j]);
			}
			Lessons.insert(lessons[i]);
		}
		console.log(Lessons.find());
	}
});
