import turtle
import time
#画心型圆弧
def hart_arc():
    for i in range(200):
        turtle.right(1)
        turtle.forward(2)
        
def move_pen_position(x,y):
    turtle.hideturtle()#隐藏画笔
    turtle.up()
    turtle.goto(x,y)
    turtle.down()
    turtle.showturtle()#显示画笔

    
love=input("请输入表白情话:")
signature=input("请签署你的名字：")
date=input("请写上日期")
if love=='':
    love=' Happy Birthday! '
if signature=='':
    signature=' Mr.Guan '
if date=='':
    date=' 2020年3月12日 '
#初始化
turtle.setup(width=800,height=500)#画布大小
turtle.color('red','pink')
turtle.pensize(3)
turtle.speed(1)#速度
#初始化画笔起始坐标

move_pen_position(x=0,y=-180)#移动画笔位置
turtle.left(140)#向左旋转140度

turtle.begin_fill()#标记背景填充位置

#1-4画图和展示
turtle.forward(224)#向前移动画笔，长度为224

#画爱心圆弧
hart_arc()#左侧圆弧
turtle.left(120)#调整画笔角度
hart_arc()#右侧圆弧

#画心型直线（右下)
turtle.forward(224)

turtle.end_fill()#标记背景填充结束位置

move_pen_position(x=70,y=160)#移动画笔位置
turtle.left(185)#向左旋转180度
turtle.circle(-110,200)#右侧圆弧根据半径r绘制extent角度的弧形

#画心型直线（右下)
turtle.left(20)
move_pen_position(x=-180,y=-180)#移动画笔位置
turtle.left(174)#向左旋转180度

#画心型直线（左下方）
turtle.forward(600)#向前移动画笔，长度为224

#在心中写上表白话语
move_pen_position(0,50)#表白语位置
turtle.hideturtle()#隐藏画笔
turtle.color('#cd5c5c','pink')
#font:设定字体、尺寸、align=“对齐”
turtle.write(love,font=('Arial',20,'bold'),align="center")

#签写署名和日期
if(signature !='')&(date !=''):
    turtle.color('red','pink')
    time.sleep(2)
    move_pen_position(220, -180)
    turtle.hideturtle()
    turtle.write(signature,font=('Arial',20),align="center")
    move_pen_position(220,-220)
    turtle.hideturtle()
    turtle.write(date,font=('Arial',20),align="center")

#1-5点击窗口关闭程序
window=turtle.Screen()
window.exitonclick()

















