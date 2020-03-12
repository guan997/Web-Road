import threading
import time
import random

count=0  #使用共享区的模拟变量
condition = threading.Condition()

class Producer(threading.Thread):    #使创建的类继承threading.Thread

    def __init__(self,threadName):    #重写其构造方法
        threading.Thread.__init__(self)
        self.threadName = threadName

    def run(self):
        global count  #引入全局变量
        while True:
            if condition.acquire():     #使用条件对象获取锁并锁定
                if count>=10:           #判断是否超过上限
                    print('共享区已满，生产者Producer进入阻塞状态，停止放入！')
                    condition.wait()    #使当前进程进入阻塞状态
                else:
                    count += 1      #放入缓冲区
                    msg = time.ctime()+' '+self.threadName+'生产了1件商品放入缓冲区，共享区总计商品个数:'+str(count)
                    print(msg)
                    condition.notify()   #唤醒其他阻塞状态的进程
                condition.release()   #解除锁定

                time.sleep(random.randrange(10)/5)  #随机休息n秒

class Customer(threading.Thread):  #消费者的线程类
    def __init__(self,threadName):
        threading.Thread.__init__(self)
        self.threadName = threadName

    def run(self):
        global count
        while True:
            if condition.acquire():
                if count<1:
                    print("共享区为空，消费者Customer线程进入阻塞状态，停止获取！")
                    condition.wait()  #当前进程进入阻塞状态
                else:
                    count -= 1
                    msg=time.ctime()+' '+self.threadName + '消费了1件商品，共享区总计商品个数为：'+str(count)
                    print(msg)
                    condition.notify() #唤醒其他阻塞线程
                condition.release()  #解除锁定
                time.sleep(random.randrange(10)/2) #随即休眠n秒

if __name__ == "__main__":
    for i in range(2):
        p = Producer('[生产者-'+str(i+1)+']')
        p.start()   #启动生产者线程

    for i in range(5):
        c = Customer('[消费者-'+str(i+1)+']')
        c.start()   #启动消费者线程


