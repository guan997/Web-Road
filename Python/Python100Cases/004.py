#判断这一天是这一年的第几天
def isLeapYear(y):
    return (y%400==0 or(y%4==0 and y%100!=0))
Dofm=[0,31,28,31,30,31,30,31,31,30,31,30]
res=0
year=2020
#year=2020int(input('Year:'))
month=int(input('Month:'))
day=int(input('day'))
if isLeapYear(year):
    Dofm[2]+=1
for i in range(month):
    res+=Dofm[i]
print("这一天是2020年的第{}天".format(res+day))
