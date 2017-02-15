##to do list##

1. markdown文件中接口域名至少有两处错误。www.weather.com ===> es6.reakingad.com 
2. mysql查看日志，安装目录/var/lib/mysql下的 主机名.err是错误日志
3. http://proxyjudge.us/是什么？
4. 有个定时执行nodejs脚本的严重的问题
	[root@iZ25qyde3kwZ myapp]# ps aux | grep node
root      3467  1.0  2.6 1233444 27000 ?       Ssl  Jan18 242:23 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3501  1.0  2.6 1233504 27220 ?       Ssl  Jan18 243:06 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3611  1.0  2.6 1233500 27204 ?       Ssl  Jan18 242:44 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3689  1.0  2.6 1233480 27156 ?       Ssl  Jan18 242:58 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3727  1.0  2.6 1233476 27064 ?       Ssl  Jan18 242:49 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3768  1.0  2.6 1233404 27012 ?       Ssl  Jan18 242:39 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      3809  1.0  2.6 1233636 27256 ?       Ssl  Jan18 242:28 /usr/bin/node /lt_es6/crawler/saveAqi2.js
root      4031  1.0  2.6 1233600 27304 ?       Ssl  Jan18 242:56 /usr/bin/node /lt_es6/crawler/saveAqi.js
root      4986  0.7  2.6 1225596 26928 ?       Ssl  Feb01  22:21 /usr/bin/node /lt_es6/crawler/saveAqi.js
root      6078  1.1  2.9 1235632 30240 ?       Ssl  Jan19 242:45 /usr/bin/node /lt_es6/crawler/saveAqi.js
root      9853  1.1  2.6 1233656 27304 ?       Ssl  Jan20 242:33 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     12154  1.2  2.7 1234528 28316 ?       Ssl  Jan21 242:55 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     14018  1.3  3.1 1235568 32352 ?       Ssl  Jan22 242:24 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     17747  0.1  3.0 1235736 31500 ?       Ssl  Jan23  24:21 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     19569  1.2  2.5 1238804 25824 ?       Ssl  12:00   0:58 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     20633  0.0  0.0 103256   848 pts/0    S+   13:16   0:00 grep node
root     22238  0.1  2.6 1234712 27252 ?       Ssl  Jan24  24:12 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     24030  0.1  2.8 1235756 29404 ?       Ssl  Jan25  24:01 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     26720  0.2  2.8 1235588 29116 ?       Ssl  Jan26  23:49 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     28504  0.2  2.8 1226464 28628 ?       Ssl  Jan27  23:37 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     30145  0.2  2.8 1227380 28948 ?       Ssl  Jan28  23:23 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     31845  0.3  2.8 1238092 29264 ?       Ssl  Jan29  23:07 /usr/bin/node /lt_es6/crawler/saveAqi.js
root     32267  1.0  3.1 1235544 32136 ?       Ssl  Jan17 243:15 node /lt_es6/crawler/saveAqi.js

每天执行完saveAqi.js脚本后，进程一直在，导致内存一直被占用。很多天后，内存被占满，其他程序就不能正常执行了。为什么会执行脚本，进程一直在呢？

5. [云盾老版应用防火墙(免费版)下线公告](https://help.aliyun.com/noticelist/articleid/20128319.html?ref=1)
6. 新建一个 `/my_recycle_bin` 以后不再使用 rm -rf 而用 mv [pathname] /my_recycle_bin 代替。然后定时每2个月定时清理垃圾箱。禁用rm -rf

##恢复删除文件##

**报错：** `Can’t find ext2fs library`
	
	# 现在问题出在这，不能正常安装这个包。老是连不上镜像
	yum install e2fsprogs-devel

**中途Killed：**  
	
	rm -rf /var/lib/rpm/__db.*
	yum clean all

	
真实原因是系统内存不足。 `top`命令查看，导致内存不足的原因是定时任务的nodejs脚本，爬取数据后，进程一直在，并没有释放其内存，10几天后导致系统内存被占满。

[参考1](http://ixdba.blog.51cto.com/2895551/1566856/)

[参考2](http://www.cnblogs.com/edwardcmh/archive/2013/05/30/3108741.html)

[参考3](http://jingyan.baidu.com/article/3c48dd3493221de10be35889.html)

[更换镜像](https://www.ruooo.com/VPS/594.html)




****

- [node爬虫](https://cnodejs.org/topic/57c529cf9b447b634391c814)
- [node restful API即权限控制](https://cnodejs.org/topic/551802d3687c387d2f5b2906)


[root@iZ25qyde3kwZ extundelete-0.2.4]# yum list |grep e2fs
e2fsprogs.x86_64                           1.41.12-18.el6_5.1          @updates 
e2fsprogs-libs.x86_64                      1.41.12-18.el6_5.1          @updates 
e2fsprogs.x86_64                           1.41.12-22.el6              base     
e2fsprogs-devel.i686                       1.41.12-22.el6              base     
e2fsprogs-devel.x86_64                     1.41.12-22.el6              base     
e2fsprogs-libs.i686                        1.41.12-22.el6              base     
e2fsprogs-libs.x86_64                      1.41.12-22.el6              base  


	ls -id
	/dev/xvda1 --inode 788052
