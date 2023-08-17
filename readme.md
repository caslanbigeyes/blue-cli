### 需要依赖的宝
                chalk：终端字体颜色
                log-symbols：在终端上显示√或×等图标
                ora：终端显示下载中的动画
                download-git-repo：下载并提取git仓库
                fs-extra：删除非空文件夹
                inquirer：通用的命令行用户界面集合，用于交互
                commander：解析命令和参数，用于处理用户输入的命令
                shelljs：自动化处理重复的事

├── chalk@4.1.2
├── commander@11.0.0
├── download-git-repo@3.0.2
├── inquirer@9.2.8
└── ora@5.4.1



### 安装及启动
npm i -g 

blue-cli create test 




### 发布到npm
发布方式一


使用npm login登录当前npm仓库，需要相关权限
使用npm publish将当前项目发布到npm仓库，稍等一会儿刷新即可使用


发布方式二


在当前项目执行npm pack，将项目打包成.tgz文件，并上传到npm 仓库

每次更新代码后，需要更新package.json中的version字段，可手动修改，也可以使用命令：

npm version major：大版本加1
npm version minor：中版本加1
npm version patch：小版本加1


