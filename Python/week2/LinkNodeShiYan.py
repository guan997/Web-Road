'''
 1.初始化   
 2.求链表长度  
 3.检查链表是否为空 
 4.遍历链表（设为输出元素）
 5.从链表中查找与给定元素值相同的元素在表中的位置 
 6.向链表中插入指定的元素    
 7. 从链表中删除指定的元素 
 其他键退出。。。。。 
'''
# 创建节点
class Node(object):
    def __init__(self, item):
        self.element = item
        self.next = None
# 创建单链表类
class SingleLinkList(object):
    def __init__(self):
        self.header = None
        self.length = 0 #长度
    #1、长度
    def llenge(self):
        return self.lenge
    # 2、判断是否为空
    def is_empty(self):
        if self.header == None:
            return True
        else:
            return False
    # 3、遍历
    def travel(self):
        current_Node = self.header
        if self.length == 0:
            print("遍历链表发现目前链表没有数据！")
        else:
            print("目前链表里面的元素有:", end=" ")
            for i in range(self.length):
                print("%s " % current_Node.element, end=" ")
                current_Node = current_Node.next
            print("\n")
     # 4、查找是否包含,并返回下标，从链表中查找与给定元素值相同的元素在表中的位置
    def isContain(self, num):
        contain = 0
        current_Node = self.header
        for i in range(self.length):
            if current_Node.element == num:
                print("%d在链表中%d处\n" % (num, i+1))#i+1是在正常人认为的位置处，程序员一般是从0开始算起
                contain = 1
            current_Node = current_Node.next
        if contain == 0:
            print("%d不在链表中\n" % num)
     # 5、指定位置插入
    def insert(self, node, index):
        current_Node = self.header
 
        if index > self.length + 1 or index <= 0:
            while(index > self.length + 1 or index <= 0):
                print("你要插入的位置不对，请重选位置:")
                index = eval(input())
        if index == 1:
            self.add(node)
        elif index == 2:
            node.next = self.header.next
            self.header.next = node
            self.length += 1
        else:
            for i in range(1, index - 1):
                current_Node = current_Node.next
            node.next = current_Node.next
            current_Node.next = node
            self.length += 1
 
     # 6、按索引删除
    def delete(self, index):
        if index <= 0 or index > self.length:
            while(index <= 0 or index > self.length):
                print("你输入的下标不对，请重新输入需要删除的值的下标：")
                index=eval(input())
             #   return
        else:
            if index == 1:
                self.header = self.header.next
                currentNode = self.header
            elif index == 2:
                current_Node = self.header
                current_Node.next = current_Node.next.next
            else:
                current_Node = self.header
                for i in range(1, index - 1):
                    current_Node = current_Node.next
                current_Node.next = current_Node.next.next
        self.length -= 1
def main():
    # 创建一个节点对象
    node1 = Node(1)
    # 创建一个单链表对象
    single_link_list = SingleLinkList()#实例化
    
    while True:
        try:
            print(''' 
            1.求链表长度  \n
            2.检查链表是否为空 \n
            3.遍历链表（设为输出元素）\n
            4.从链表中查找与给定元素值相同的元素在表中的位置 \n
            5.向链表中插入指定的元素    \n
            6. 从链表中删除指定的元素 \n
            其他键退出。。。。。 ''')
            number=eval(input("请输入要进行的操作序号："))
            if number==1:
                print("检查链表是否为空")
                print("链表长度为：",single_link_list.llenge)
            if(number==2):
                print("检查链表是否为空")
                if(single_link_list.is_empty()):
                    print("链表为空")
                else :
                    print("链表不为空")
            if(number==3):
                print("遍历链表")
                single_link_list.travel()
            if(number==4):
                print("目前的链表状态。")
                single_link_list.travel() 
                print("正在查找这一个节点是否在链表中：")
                single_link_list.isContain(eval(input("输入要验证的数：")))
            if(number==5):
                print("目前的链表状态。")
                single_link_list.travel()
                print("向链表中插入指定的元素")
                print("正在按指定位置插入数值：")
                node3 = Node(eval(input("输入插入的数：")))
                position=eval(input("输入要插入到的位置为："))
                single_link_list.insert(node3, position)
                print("操作后链表的状态。")
                single_link_list.travel()
            if(number==6):
                print("目前的链表状态。")
                single_link_list.travel()
                print("从链表中删除指定的元素")
                single_link_list.delete(eval(input("输入要删除哪个位置的数：")))
                print("操作后链表的状态。")
                single_link_list.travel()
            
            else:
                print("输入错误")
        except:
            print("格式错误")
            continue
if __name__ == '__main__':
    main()        
 
    
