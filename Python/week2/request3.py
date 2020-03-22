#360和百度如何爬取搜索
import requests
keyword="Python"
try:
     #百度kv={'wd':'keyword'}
     #r=requests.get("http://www.baidu.com/s",params=kv)
     kv={'q':'keyword'}#360
     r=requests.get("http://www.so.com/s",params=kv)
     print(r.request.url)
     r.raise_for_status()
     print(len(r.text))
except:
     print("爬取失败")
