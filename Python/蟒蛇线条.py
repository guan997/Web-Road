#PythonDraw.pyimport的更多用法
"""import
import turtle
turtle.setup(650,350,200,200)
turtle.penup()
turtle.fd(-250)
turtle.pendown()
turtle.pensize(25)
turtle.pencolor("purple")
turtle.seth(-40)
for i in range(4):
    turtle.circle(40,80)
    turtle.circle(-40,80)
turtle.circle(40,80/2)
turtle.fd(40)
turtle.circle(16,180)
turtle.fd(40 * 2/3)
turtle.done()
"""
"""from 
from turtle import*
setup(650,350,200,200)
penup()
fd(-250)
pendown()
pensize(25)
pencolor("purple")
seth(-40)
for i in range(4):
    circle(40,80)
    circle(-40,80)
circle(40,80/2)
fd(40)
circle(16,180)
fd(40 * 2/3)
done()
"""
#import<库名>as<库别名>
import turtle as t1
t1.setup(650,350,200,200)
t1.penup()
t1.fd(-250)
t1.pendown()
t1.pensize(25)
t1.pencolor("purple")
t1.seth(-40)
for i in range(4):
    turtle.circle(40,80)
    turtle.circle(-40,80)
t1.circle(40,80/2)
t1.fd(40)
t1.circle(16,180)
t1.fd(40 * 2/3)
t1.done()
