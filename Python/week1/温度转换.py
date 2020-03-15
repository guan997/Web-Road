#TempConvert.py
TemStr=input("请输入带有符号的温度")
if TemStr [-1] in ['F','f']:
    C=(eval(TemStr[0:-1])-32)/1.8
    print("转换后的温度{:.2f}C".format(C))
elif TemStr[-1] in['C','c']:
        F=1.8*eval(TemStr[0:-1])+32
        print("转换后的温度{:.2f}F".format(F))
else:
         print("错误")
