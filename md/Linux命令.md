#Linux进程管理命令#

#什么是进程#

进程是正在执行的程序或命令。例如运行`ls`查看当前目录时，会产生一个进程，执行完得到了结果后进程结束。apache的httpd服务启动后会产生进程，而且不止1个进程。httpd服务的初始进程而且会常驻在内存中等待用户的访问。每当用户访问httpd，就会产生一个进程，apache可以设置最大同时产生2048个进程

# ps命令 #

	# 所有进程
	ps aux
标准用法时参数组aux前不加`-`。加了也可以正常使用，只不过会获得一条warning
 
	# 仅显示node进程
	ps aux | grep node
	# 按内存使用量逆序数字排序
	ps aux | sort -k4,4nr
	# 按内存使用量逆序数字排序前10名
	ps aux | sort -k4,4nr | head -10
	# 按cpu使用排序
	ps aux | sort -k3,3nr | head -10
	
**ps命令所列各项信息的含义**

- USER 该进程由那个用户产生
- PID 进程的ID号
- %CPU 占用CPU资源的百分比
- %MEM 占用物理内存的百分比
- VSZ 占用虚拟内存的大小（KB）
- RSS 占用实际物理内存的大小（KB）
- TTY 该进程是哪个终端运行的。tty1~tty6是本地字符终端，tty7是图形终端，pts/0~pts/255代表虚拟终端（例如xshell登录）？说明是内核直接启动的系统进程
- STAT 进程的状态 S修面 s包含子进程 +位于后台运行 R运行
- START 进程启动的时间
- TIME 进程耗费CPU的时间。时间越长说明越耗费CPU资源
- COMAND 进程名

#pstree命令#

	# 查看进程树	
	pstree
	# 查看每一个进程的pid
	pstree -p

#top命令#

	top

top每3秒刷新一次，默认按%CPU占有率排序
	
h 进入帮助提示
P (大写)按CPU排序
M (大写)按内存排序
N (大写)按pid排序
q或ctrl+c 退出

	top - 15:28:28 up 258 days, 17:43,  1 user,  load average: 0.00, 0.00, 0.00
	Tasks:  93 total,   1 running,  92 sleeping,   0 stopped,   0 zombie
	Cpu(s):  1.5%us,  0.4%sy,  0.0%ni, 96.2%id,  1.9%wa,  0.0%hi,  0.0%si,  0.0%st
	Mem:   1018600k total,   941536k used,    77064k free,   284472k buffers
	Swap:        0k total,        0k used,        0k free,   225416k cached

top行: 

	15:28:28        服务器时间，
	up 258 days, 17:43      服务器最近一次启动至今的总时长
	1 user    当前登录的用户数
	load average: 0.00, 0.00, 0.00    1分钟之前、5分钟之前、15分钟内的平均负载

Tasks行：
	
	93 total   进程总数
	1 running   1个进程正在运行（即top命令的进程）
	92 sleeping    92个睡眠的进程
	0 stopped      正在停止的进程
	0 zombie	 僵尸进程

Cpu(s)行：
	
	1.5%us   被用户占用的百分比
	0.4%sy   被系统占用的百分比
	0.0%ni   被修改过优先级的进程所占用的百分比
	96.2%id  系统的空闲百分比（重要参数，一般不能低于20%）

Mem行：
	
	1018600k total  内存总量
	941536k used   已用内存
	77064k free     空闲内存
	284472k buffers  缓冲（可以加速写入）

Swap行：交换分区(虚拟内存)

	0k total   交换分区总大小
	0k used   已经使用的交换分区大小
	0k free    空闲交换分区大小
	225416k cached   作为缓存的交换分区大小（可以加速读取）

#kill杀死进程#

kill命令可以带不同的信号来执行，默认带信号15

	# 强制终止进程	
	kill -9 进程ID


#查看系统内存使用情况#


	free -m

m代表按mb显示。g代表按Gb显示

    			   total       used       free     shared    buffers     cached
	Mem:           994        916         78          0        279        220
	-/+ buffers/cache:        416        578
	Swap:            0          0          0

Mem行：
	994 总内存数994Mb
	916 已使用916Mb
	78  空闲78Mb 
	0
	279  缓冲279Mb
	220  缓存220Mb

-/+ buffers/cache行：

	416 被程序占用416Mb（减掉了buffers和cached占用的内存）
	578 程序可用578Mb（加上了buffers和cached占用的内存）

Swap行：交换分区（虚拟内存）
	
	0
	# 为了提高Linux性能，可以设置这个交换分区。
	
	