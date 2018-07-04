# express web容器
##工程目录：
- router：加载静态页面逻辑（express启动入口）
- views：静态页面根目录
##逻辑：
	遍历views目录，以文件夹为单元，映射为访问的path。

	以当前工程为例，views下存在demo2、demo3两个文件夹，
	当运行npm start后，
	即映射为
		http://localhost:3000/demo2、http://localhost:3000/demo3
##使用场景：
	提供前端研发集成阶段成果物的运行环境

##运行
	npm start
##运行(静默)
	nohup npm start &
##端口号 占用
	lsof -i tcp:3000
