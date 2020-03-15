'''aa=input("请输入一个整数")
if(aa==0):
    print("Hello")
elif(aa>0):
    print("He")
    print("ll")
    print("o ")
    print("Wo")
    print("rl")
    print("d ")
else:
    print("H")
    print("e")
    print("l")
    print("l")
    print("o")
'''
n = eval(input("请输入一个整数"))
if n == 0:
    print("Hello World")
elif n > 0:
    print("He\nll\no \nWo\nrl\nd")
else:
    for c in "Hello World":
        print(c)
