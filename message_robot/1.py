import requests
import util
import os
import time
from selenium import webdriver

header = {
	"Host": "www.douyu.com",
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0",
	"Accept": "application/json, text/plain, */*",
	"Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
	"Accept-Encoding": "gzip, deflate, br",
	"X-Requested-With": "XMLHttpRequest",
	"Connection": "keep-alive",
	"Referer": "https : //www.douyu.com/",
	"Cookie": "dy_did=5b997e943c99b1f56640454200001501; acf_did=5b997e943c99b1f56640454200001501; Hm_lvt_e99aee90ec1b2106afe7ec3b199020a7=1566139495,1566140552,1566140562,1566141225; smidV2=201908181320016e5afca7e574f0998e28921de7a9ef9f009fe05f64fc81cf0; Hm_lpvt_e99aee90ec1b2106afe7ec3b199020a7=1566141225; PHPSESSID=c7rj3fbmt62m5lcc36nhvvdho7; acf_auth=dcadSxm3wX5a95d1kTz0DWK8XfHyPGLKRY2cZMuVn3QIpZTd3NQyqbExr2lrpQldUBeMN5J3udeyJKOgQhgW00cFaF3vF08GXUdAfpIx71wJLiauHHA8uAI; wan_auth37wan=7671d0fed292NQ809UnZi5dHmDQaRku4Dnn1kO%2BgnqF3rYUhqp%2BvKypq0iIU8sglofbJeQPMz%2FOptfJbGGShG5vq7T6yf7TZVK6NA%2FHcvG1WTLQX2IQ; acf_uid=314616362; acf_username=314616362; acf_nickname=%E6%9C%AA%E6%9D%A5%E6%9C%AA%E6%9B%BE%E6%9D%A5061; acf_own_room=1; acf_groupid=1; acf_phonestatus=1; acf_avatar=https%3A%2F%2Fapic.douyucdn.cn%2Fupload%2Favatar_v3%2F201907%2Fba4e99dd482246e5a8683cfcc15643e7_; acf_ct=0; acf_ltkid=98907675; acf_biz=1; acf_stk=fb539d099839a96a; acf_isNewUser=1",
	"TE": "Trailers"
}

cookie = {
	"name": "room",
	"value": "text",
	"dy_did": "5b997e943c99b1f56640454200001501",
	"acf_did": "5b997e943c99b1f56640454200001501",
	"Hm_lvt_e99aee90ec1b2106afe7ec3b199020a7": "1566139495,1566140552,1566140562,1566141225",
	"smidV2": "201908181320016e5afca7e574f0998e28921de7a9ef9f009fe05f64fc81cf0",
	"Hm_lpvt_e99aee90ec1b2106afe7ec3b199020a7": "1566141225",
	"PHPSESSID": "c7rj3fbmt62m5lcc36nhvvdho7",
	"acf_auth": "dcadSxm3wX5a95d1kTz0DWK8XfHyPGLKRY2cZMuVn3QIpZTd3NQyqbExr2lrpQldUBeMN5J3udeyJKOgQhgW00cFaF3vF08GXUdAfpIx71wJLiauHHA8uAI",
	"wan_auth37wan": "7671d0fed292NQ809UnZi5dHmDQaRku4Dnn1kO%2BgnqF3rYUhqp%2BvKypq0iIU8sglofbJeQPMz%2FOptfJbGGShG5vq7T6yf7TZVK6NA%2FHcvG1WTLQX2IQ",
	"acf_uid": "314616362",
	"acf_username": "314616362",
	"acf_nickname": "%E6%9C%AA%E6%9D%A5%E6%9C%AA%E6%9B%BE%E6%9D%A5061",
	"acf_own_room": "1",
	"acf_groupid": "1",
	"acf_phonestatus": "1",
	"acf_avatar": "https%3A%2F%2Fapic.douyucdn.cn%2Fupload%2Favatar_v3%2F201907%2Fba4e99dd482246e5a8683cfcc15643e7",
	"acf_ct": "0",
	"acf_ltkid": "98907675",
	"acf_biz": "1",
	"acf_stk": "fb539d099839a96a",
	"acf_isNewUser": "1"
}
#
# url = "https://www.douyu.com/101"
# wb = webdriver.PhantomJS()
# wb.get(url)
# time.sleep(10)
# login_xpath = '/html/body/section/main/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/span'
# login_class = "MuteStatus-isLog"

# 登录 <span class="MuteStatus-isLog">登录</span>
# wb.find_element_by_link_text("登录").click()

# wb.find_element_by_xpath(xpath=login_xpath).click()
# time.sleep(10)
# wb.get_screenshot_as_file("login.png")

url = "https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2F"
wb = webdriver.PhantomJS()
wb.get(url)
time.sleep(5)
wb.add_cookie(wb.get_cookies()[0])
wb.get("https://passport.douyu.com/scan/generateCode")
print(wb.get_cookies())
print(wb.page_source)
# payload = {"client_id": 1}
# print(requests.post(url="https://passport.douyu.com/scan/generateCode", params=payload).json())

# 二维码刷新
# /html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/div/a
# <div class="qrcode-con js-qrcode-con"><canvas width="123" height="123"></canvas></div>

login_by_password = '/html/body/div[2]/div/div/div[2]/div[2]/div[3]/div/span[2]'

"""
url = "https://www.douyu.com/101"  # 5720533
wb = webdriver.PhantomJS()
wb.get(url)
wb.add_cookie(cookie)
# wb.add_cookie(cookie)

time.sleep(10)
print("#####", wb.find_element_by_xpath(xpath='/html/body/section/main/div[3]/div[1]/div[1]/div/div[3]/div[3]/div[5]'))
util.write_data(write_path=os.getcwd() + "\\room_101.txt", data=wb.page_source)

input_msg = wb.find_element_by_xpath(
	'/html/body/section/main/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/textarea')

input_msg.send_keys("厉害厉害")

wb.find_element_by_xpath('/html/body/section/main/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/div[2]').click()
"""

# time.sleep(2)
# while True:
# 	try:
# 		input_msg = wb.find_element_by_xpath(
# 			'/html/body/section/main/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/textarea')
# 		input_msg.send_keys("哈哈哈哈哈哈哈")
# 		wb.find_element_by_xpath(
# 			'/html/body/section/main/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/div[2]').click()
# 		break
# 	except:
# 		print("加载中......")
# 		time.sleep(2)
# 		continue
#
# d = requests.get("https://www.douyu.com/lapi/member/api/getInfo?client_type=0&d=1566141395336", headers=header).text
# util.write_data(os.getcwd() + "\\login.txt", data=d)
