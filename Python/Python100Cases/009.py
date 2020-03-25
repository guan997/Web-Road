#9回文
def isPalindrome(x):
     if (x<0) or (x%10==0 and x!=0):
          return print(False)
     revertedNumber=0
     while(x>revertedNumber):
          print(x)
          revertedNumber=revertedNumber*10+x%10
          x/=10
          if x==revertedNumber or x==revertedNumber/10:
               return print(False)
          else:
               return print(True)
isPalindrome(230)

