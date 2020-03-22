import requests
import os
url="http://online.sccnn.com/img2/5890/cat160516-11.png"
root="E://学习文档//Python//"
path=root+url.split('/')[-1]
try:
     if not os.path.exists(root):
          os.mkdir(root)
     if not os.path.exists(path):
          r=requests.get(url)
          with open (path,'wb') as f:   #转换成二进制
               f.write(r.content)
               f.close()
               print("文件保存成功")
     else:
          print("文件已存在")
except:
     print("爬取失败")
