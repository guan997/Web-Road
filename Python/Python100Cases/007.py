#7给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
def ssreverse(x):
     if (-2^31)<= x <=(2^31-1):
          return x
     else:
          return 0
     str_x=str(x)
     if str_x[0]!='-':
          str_x=str_x[::-1]
          x=int(str_x)
     else:
          str_x=str_x[:0:-1]
          x=int(str_x)
          x=-x
     return x if (-2^31)<= x <=(2^31-1) else 0
          
       
