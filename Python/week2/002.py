#个税计算1
profit=int(input("请输入单月利润:"))
sum=0
thresholds=[100000,100000,200000,200000,400000]
rates=[0.1,0.075,0.05,0.03,0.015,0.01]
for i in range(len(thresholds)):
    if profit<=thresholds[i]:
        sum_=profit*rates[i]
        break
    else:
        sum+=thresholds[i]*rates[i]
        profit-=thresholds[i]
sum+=profit*rates[-1]
print("应获得奖金：{}".format(sum))
