#coding:utf-8
import time,datetime
import os,sys,re
import pprint
import requests
import bs4
import shutil
from log import log

class GetBugOnce():
	def __init__(self):
		self.DirPath = os.getcwd()
		self.BugId = self.GetBugId()
		self.cookies = self.GetCookies()
		self.StatisTime = self.GetStatisTime()
	def GetBugId(self):
		with open(self.DirPath + "\\BugId","r") as ReadBugId:
			Id = int(ReadBugId.read())
			return Id
	
	def GetCookies(self):
		cookies = {}
		with open(self.DirPath + "\\cook") as ReadCook:
			cook = ReadCook.read()
			for x in cook.split(";"):
				key,value = x.split("=",1)
				cookies[key] = value
		return cookies
	
	def GetStatisTime(self):
		StatisTime = 0
		TimeNow = int(time.time())
		TimeSet = TimeNow + 8 * 3600
		FreeTime = TimeSet % (24*3600)
		if datetime.datetime.now().weekday() == 0 and FreeTime < (18 * 3600):
			StatisTime = TimeNow - FreeTime
		else:
			if FreeTime < (18 * 3600):
				StatisTime = int(TimeNow-(TimeNow % 86400) - 50400)
			elif FreeTime >= (18 * 3600):
				StatisTime = int(TimeNow - (FreeTime - 18 * 3600))
		return StatisTime

	def BugList(self):
		if os.path.exists(self.DirPath + "\\Bug\\"):
			fileList = os.listdir(self.DirPath + "\\Bug\\")
			if len(fileList)>0:
				return fileList
			else:
				return None
		else:
			return None

	def DownloadBug(self,bugId):
		Url = "https://www.tapd.cn/20292171/bugtrace/bugs/view?bug_id=" + str(bugId) +"&url_cache_key=f3c4dcbe40c485bbc479fdffd53f4cac"
		head = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'}
		GetBug = requests.get(Url,headers = head,cookies = self.cookies)
		if GetBug.status_code == 200:
			GetBug.encoding = "utf-8"
			GetBugInfo = GetBug.content
			with open(self.DirPath + "\\temp\\"+ str(bugId) + ".html","wb+") as WriteBug:
				WriteBug.write(GetBugInfo)
			soup = bs4.BeautifulSoup(open(self.DirPath + "\\temp\\"+ str(bugId) + ".html",encoding = 'UTF-8'),'lxml')
			try:
				BugCreateTime = soup.select('.editable-value')[8].getText()
				BugCreateTimeUnix = int(time.mktime(time.strptime(BugCreateTime, '%Y-%m-%d %H:%M:%S')))
				if BugCreateTimeUnix <= self.StatisTime:
					shutil.move(self.DirPath + "\\temp\\"+ str(bugId) + ".html",self.DirPath + "\\Bug\\")
					#有效的Bug
					return 1
				else:
					os.remove(self.DirPath + "\\temp\\"+ str(bugId) + ".html")
					#Bug的创建时间不符合要求
					return 0
			except IndexError:
				os.remove(self.DirPath + "\\temp\\"+ str(bugId) + ".html")
				#Bug不存在或者是编辑草稿
				return -1
		else:
			#下载失败
			return -2
	
	def BatchDownloadBug(self):
		while self.BugList() != None:
			os.remove(self.DirPath + "\\Bug\\" + self.BugList()[0])
		DownloadBugId = self.BugId
		NullBug = 0
		BugNum = 0
		ResDown1 = -1
		while NullBug < 20:
			ResDown = self.DownloadBug(DownloadBugId)
			DownloadBugId += 1
			if ResDown == -1 and ResDown1 == -1:
				NullBug += 1
				log('NullBug',NullBug)
				log('ResDown','Bug不存在或者是编辑草稿')
			elif ResDown == -2:
				log('ResDown','下载失败,尝试一次重新下载')
				ResDown = self.DownloadBug(DownloadBugId)
			elif ResDown == 0:
				log('ResDown','Bug的创建时间不符合要求')
				break
			elif ResDown == 1:
				BugNum += 1
				log('下载成功，Bug Id',DownloadBugId)
			ResDown1 = ResDown
		if (int(time.time()) - self.StatisTime >= 6*3600):
			with open(self.DirPath + "\\BugId","w+") as WriteBugId:
				WriteBugId.write(str(DownloadBugId))
		return BugNum

GetBugOnce = GetBugOnce()

class bugStatis():
	def __init__(self):
		self.path_bug = os.getcwd() + "\\bug\\"
		self.bug_file_list = os.listdir(self.path_bug)
		self.bug_statu_new = '新'
		self.bug_statu_solved = '已解决'
		self.bug_statu_closed = '已关闭'
		self.bug_statu_refuse = '已拒绝'
		self.bug_statu_reopen = '重新打开'
		self.bug_statu_accept = '接受/处理'

	def timeSection(self):
		time_now = int(time.time())
		time_yesterday = int(time_now-(time_now%86400) - 50400)
		time_before_yesterday = int(time_now-(time_now%86400) - 50400 - 86400)
		time_dict = {'time_now':time_now,'time_yesterday':time_yesterday,'time_before_yesterday':time_before_yesterday}
		return time_dict
	
	def static_bug(self,bug_list):
		bug_deal_name_list = []
		bug_deal_name_dict = {}
		for bug_info in bug_list:
			#提取bug处理者的名字
			if bug_info['bug_deal_person'] == '--':
				pass
			elif re.search(r';',str(bug_info['bug_deal_person'])):
				for gropname in str(bug_info['bug_deal_person']).split(';'):
					bug_deal_name_list.append(gropname)
			else:
				bug_deal_name_list.append(bug_info['bug_deal_person'])
		#去除重复的处理者	
		bug_deal_name_list = list(set(bug_deal_name_list))
		
		for name in bug_deal_name_list:
			bug_no_feedback_num = 0
			bug_solved_num = 0
			bug_sum_num = 0
			bug_statu_num_dict = {}
			for bug_info in bug_list:
				if re.search(name,bug_info['bug_deal_person']):
					if bug_info['bug_statu'] == self.bug_statu_new or bug_info['bug_statu'] == self.bug_statu_reopen:
						bug_no_feedback_num+=1
					elif bug_info['bug_statu'] == self.bug_statu_solved or bug_info['bug_statu'] == self.bug_statu_closed:
						bug_solved_num+=1
					bug_sum_num +=1 
			bug_statu_num_dict['no_feedback_num'] = bug_no_feedback_num
			bug_statu_num_dict['solved_num'] = bug_solved_num
			bug_statu_num_dict['sum_num'] = bug_sum_num
			bug_deal_name_dict[name] = bug_statu_num_dict		
		return 	bug_deal_name_dict
	
	def getBugInfoList(self,static_time):
		bug_info_list = []
		# bug_file_list_length = self.bug_file_list
		# if len(bug_file_list_length) == 0:
		# 	print('Error:' + self.path_bug + '路径下没有文件')
		# 	return 0
		# else:
		for bug_name in self.bug_file_list:
			bug_info_dict = {}
			soup = bs4.BeautifulSoup(open(self.path_bug + bug_name,encoding = 'UTF-8'),'lxml')	
			bug_infomation_list = soup.select('.editable-value')  #bug的信息,包含html字段 -- List
			bug_statu = soup.select('.c-red2')[0].getText()  #bug的状态 -- String
			bug_create_time_normal = bug_infomation_list[8].getText()  #bug的创建时间
			bug_create_time = int(time.mktime(time.strptime(bug_create_time_normal, '%Y-%m-%d %H:%M:%S')))
			if bug_statu == self.bug_statu_refuse:
				pass
			elif bug_statu == self.bug_statu_solved or bug_statu == self.bug_statu_closed:
				#if bug_create_time >= self.timeSection()['time_before_yesterday'] and bug_create_time <= static_time:
				bug_info_dict['bug_deal_person'] = bug_infomation_list[-2].getText()  # bug的解决者
				bug_info_dict['bug_statu'] = bug_statu
				bug_info_dict['bug_create_time'] = bug_create_time
			else:
				#if bug_create_time >= self.timeSection()['time_before_yesterday'] and bug_create_time <= static_time:
				bug_info_dict['bug_deal_person'] = bug_infomation_list[5].getText()
				bug_info_dict['bug_statu'] = bug_statu 
				bug_info_dict['bug_create_time'] = bug_create_time

			if len(bug_info_dict) != 0:
				bug_info_list.append(bug_info_dict)
		
		if len(bug_info_list) != 0:
			bug_dict_out = self.static_bug(bug_info_list)
			return bug_dict_out,bug_info_list
					
bugStatis = bugStatis()

def main():
	GetBugAll = GetBugOnce.BatchDownloadBug()
	if GetBugAll == 0:
		log('BatchDownloadBug','没有有效Bug')
	else:
		GetStatisResult = bugStatis.getBugInfoList(GetBugOnce.StatisTime)
		log('StatisTime',GetBugOnce.StatisTime)
		log('IsSameDay',int(time.time()) - GetBugOnce.StatisTime < 6*3600)
		BugOutInfo = GetStatisResult[0]
		pprint.pprint(BugOutInfo)
		if (int(time.time()) - GetBugOnce.StatisTime >= 6*3600):
			with open('buginfo.txt','a+') as WriteBugInfo:
				WriteBugInfo.write("\n" + str(datetime.datetime.now()) + "\t" +":" + '\n')
				for name in BugOutInfo:
					WriteBugInfo.write(name + ":" + "\t" +str(BugOutInfo[name]) + "\n")
				WriteBugInfo.write("#"*60 + "\n")
if __name__ == '__main__':
    main()
    os.system("pause") 