# 快速了解

## 项目介绍

GIN-VUE-ADMIN 是一款基于GIN+VUE+ElementUI开发的后台管理系统快速开发脚手架

* GitHub地址:[https://github.com/flipped-aurora/gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin)
* 在线测试地址:[http://qmplus.henrongyi.top/](http://qmplus.henrongyi.top/)

GIN-VUE-ADMIN是一个基于vue和gin开发的全栈前后端分离的后台管理系统，拥有jwt鉴权，动态路由，动态菜单，casbin鉴权，表单生成器，代码生成器等功能，提供了多种示例文件，让大家把更多时间专注在业务开发上。

## 技术选型

- 前端：用基于`vue`的`Element-UI`构建基础页面。
- 后端：用`Gin`快速搭建基础restful风格API，`Gin`是一个go语言编写的Web框架。
- 数据库：采用`MySql`(5.6.44)版本，使用`gorm`实现对数据库的基本操作,已添加对sqlite数据库的支持。
- 缓存：使用`Redis`实现记录当前活跃用户的`jwt`令牌并实现多点登录限制。
- API文档：使用`Swagger`构建自动化文档。
- 配置文件：使用`fsnotify`和`viper`实现`yaml`格式的配置文件。
- 日志：使用`go-logging`实现日志记录。

## 主要功能
- 权限管理：基于`jwt`和`casbin`实现的权限管理 
- 文件上传下载：实现基于七牛云的文件上传操作（为了方便大家测试，我公开了自己的七牛测试号的各种重要token，恳请大家不要乱传东西）
- 分页封装：前端使用mixins封装分页，分页方法调用mixins即可 
- 用户管理：系统管理员分配用户角色和角色权限。
- 角色管理：创建权限控制的主要对象，可以给角色分配不同api权限和菜单权限。
- 菜单管理：实现用户动态菜单配置，实现不同角色不同菜单。
- api管理：不同用户可调用的api接口的权限不同。
- 配置管理：配置文件可前台修改（测试环境不开放此功能）。
- 富文本编辑器：MarkDown编辑器功能嵌入。
- 条件搜索：增加条件搜索示例。
- restful示例：可以参考用户管理模块中的示例API。 
```
前端文件参考: src\view\superAdmin\api\api.vue 
后台文件参考: model\dnModel\api.go 
```
- 多点登录限制：需要在`config.yaml`中把`system`中的`useMultipoint`修改为true(需要自行配置Redis和Config中的Redis参数，测试阶段，有bug请及时反馈)。
- 分片长传：提供文件分片上传和大文件分片上传功能示例。
- 表单生成器：表单生成器借助 [@form-generator](https://github.com/JakHuang/form-generator)。
- 代码生成器：后台基础逻辑以及简单curd的代码生成器。 

## 项目架构

### 系统架构图

![系统架构图](http://qmplusimg.henrongyi.top/gin-vue-admin.png)

### 前端详细设计图 （提供者:<a href="https://github.com/baobeisuper">baobeisuper</a>）

![前端详细设计图](http://qmplusimg.henrongyi.top/naotu.png)

## 更新日志

|  日期   | 日志  |
|  :---:  | --- |
|2020/01/07| 角色增加数据资源功能 增加数据资源关联返回 演示环境代码已同步 开启了多点登录拦截 可能会被其他人挤掉 |
|2020/01/13| 增加了配置管理功能 此功能不发表至测试环境 待保护机制以及服务重启机制发开完成后才会发表值测试环境 请自行clone且导入sql体验 |
|2020/02/21| 修改了casbin的自定义鉴权方法，使其完全支持RESTFUL的/:params以及?query= 的接口模式 |
|2020/03/17| 增加了验证码功能 使用了 [@dchest/captcha](https://github.com/dchest/captcha)库 |
|2020/03/30| 代码生成器开发完成 表单生成器开发完成 使用了[@form-generator](https://github.com/JakHuang/form-generator) 库 |
|2020/04/01| 增加前端历史页签功能，增加（修改）条件查询示例，前端背景色调修改为白色 如不需要此功能可以在 view\/layout\/index\/   屏蔽HistoryComponent 背景色调 为本页260行 &.el-main 的background |
|2020/04/24|1.增加了角色拷贝功能（目前只支持单角色拷贝）<br>2.增加了首页音频播放器示例 增加了 dotolist工具<br>3.增加了docker支持<br>4.修复了部分total返回0的bug<br>5.修复了首页会发送一次无用404请求的bug<br>6.修复了swagger不能携带token的bug<br>7.修复菜单展示下级只有一个隐藏菜单时候的交互错误<br>8.修复了config从前端控制变化时候导致yaml内部的key名称错误的bug<br>9.数据库添加拷贝角色相关api和权限|
|2020/05/10|1.登录首页样式变更<br>2.增加是否自动创建api入库的开关 可自动产生api入库<br>3.修改了menu的查询建树逻辑 增强了菜单查询时的性能<br>4.修复user API组的中间件未开放问题<br>5.删除地区编码数据（无用数据库表 可不更新）<br>6.增加了后端表单校验工具 <br>7.修改了自动生成代码中的模板文本错误<br>8.编辑菜单-icon功能变为可查询选择 增强交互友好性|