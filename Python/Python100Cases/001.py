#实例001：数值组合
total=0
for i in range(1,5):
    for j in range(1,5):
        for k in range(1,5):
            if((i!=j)and(j!=k)and(k!=i)):
                print(i,j,k)
                total+=1
print("总共有多少种可能",total)
