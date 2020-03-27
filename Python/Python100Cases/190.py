#颠倒给定的 32 位无符号整数的二进制位。
def reverseBits(n):
 a=int((bin(n)[2:]).zfill(32)[::-1],base=2)
 return print(a)

reverseBits(244)
 
