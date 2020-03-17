#阶乘
def jiecheng(n):
    s=1
    for i in range(1,n+1):
        s*=i
    return s
sum=int(input("请输入你所求的阶乘："))
print("你所求{0}的阶乘为{1}".format(sum,jiecheng(sum)))

