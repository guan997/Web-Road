#可选参数的使用
def canshu(n,m=1):
    s=1
    for i in range(1,n+1):
        s*=i
    return s//m
sum=int(input("第一项请输入所求阶乘除以2:"))

print("所求结果为：",canshu(sum))
#可变参数
def kebian(n,*b):
    s=1
    for i in range(1,n+1):
        s*=i
    for item in b:
       # s*=item
         s=s-item
    return s
#ss=eval(input("第二项请输入所求阶乘再乘以乘数"))
ss=kebian(10,10,10)
print("第二项所求结果为：",ss)
#函数的返回值
def retu(n,m=1):
    s=1
    for i in range(1,n+1):
        s*=i
    return s//m,n,m
a,b,c=retu(10,5)
print("第三项结果为：",a,b,c)
#局部变量和全局变量
n,s=10,100
def fact(n):
    s=1
    for i in range(1,n+1):
        s*=i
    return s
print("第四项结果为：",fact(n),s)
