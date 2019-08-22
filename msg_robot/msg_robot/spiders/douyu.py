# -*- coding: utf-8 -*-

import scrapy


class DouYu(scrapy.Spider):
	name = "DouYu"
	allowed_domains = ["douyu.com"]
	start_urls = ["https://www.douyu.com"]
	
	def parse(self, response):
		name = "%s.html" % response.url.split("www.")[-1].replace(".", "_")
		
		with open(name, "wb") as wd:
			wd.write(response.body)
