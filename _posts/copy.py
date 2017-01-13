import shutil

for i in range(9, 23):
    shutil.copyfile('2015-04-19-day-7.markdown', '2015-04-' + str(26-i) + '-day-' + str(i) + '.markdown')
