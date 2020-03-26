#常见列表操作
lt=[]
lt=[1,2,3,4,5,6,7,8]
print(lt)
lt[1]=22
print(lt)
lt.insert(1,21)
print(lt)
del lt[0]
print(lt)
del lt[0:3]
print(lt)
print(0 in lt)
lt.append(0)
print(lt)
print(lt.index(6))
print(lt)
print(len(lt))
print(max(lt))
lt.clear()
print(lt)
