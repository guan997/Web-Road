#9回文
def isPalindrome(x:int):
        if x<0:	#字符串切片
            return print('False')
        if str(x)[::-1]==str(x):
            return print('True')
        else:
            return print('False')
isPalindrome(-10)
