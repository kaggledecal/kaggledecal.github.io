from datetime import datetime
import json
f = open('syllabus.txt', 'r')
lessons = []
for line in f:
	if len(line) > 1:
		datesString, description = line.split('!')
		dates = datesString.split(',')
		formattedDates = [str(datetime.strptime(date.replace(' ','') + ' 2016', '%m/%d %Y')) for date in dates]
		lessons.append({
			'dates':formattedDates,
			'description':description
		})
with open('lessons.json', 'w') as outfile:
    json.dump(lessons, outfile)