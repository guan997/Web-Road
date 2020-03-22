#自助ip查询
import requests
url="http://ip.tool.chinaz.com/"
try:
     r=requests.get(url+'202.204.80.112')
     print(r.request.url)
     r.raise_for_status()
     print(r.text[-500:])
except:
     print("爬取失败")
