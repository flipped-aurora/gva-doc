# 开发介绍

## 项目目录(1.0)

```
├─QMPlusServer  	（后端文件夹）
│  ├─cmd     	（启动文件）
│  ├─config    	（配置包）
│  ├─controller  	（api和servers存放位置）
│  ├─db       	（数据库脚本）
│  ├─docs  	（swagger文档目录）
│  ├─init      	（初始化路由 数据库 日志等）
│  ├─log     	（日志存放地址）
│  ├─middleware   	（中间件）
│  ├─model            	（结构体层）
│  ├─router          	（路层）
│  ├─static	（静态文件--配置文件 casbin模型等）
│  ├─tools  (后端工具包)
│  └─tpl		（自动化代码模板）
└─QMPlusVuePage	（前端文件）
    ├─public	（发布模板）
    └─src
        ├─api	（向后台发送ajax的封装层）
        ├─assets	（静态文件）
        ├─components（组件）
        ├─router	（前端路由）
        ├─store	（vuex 状态管理仓）
        ├─style	（通用样式文件）
        ├─utils	（前端工具库）
        └─view	（前端页面）

```

## 项目目录(2.0)

```
    ├─server  	     （后端文件夹）
    │  ├─api            （API）
    │  ├─config         （配置包）
    │  ├─core  	        （內核）
    │  ├─db             （数据库脚本）
    │  ├─docs  	        （swagger文档目录）
    │  ├─global         （全局对象）
    │  ├─initialiaze    （初始化）
    │  ├─middleware     （中间件）
    │  ├─model          （结构体层）
    │  ├─resource       （资源）
    │  ├─router         （路由）
    │  ├─service         (服务)
    │  └─utils	        （公共功能）
    └─web            （前端文件）
        ├─public        （发布模板）
        └─src           （源码包）
            ├─api       （向后台发送ajax的封装层）
            ├─assets	（静态文件）
            ├─components（组件）
            ├─router	（前端路由）
            ├─store     （vuex 状态管理仓）
            ├─style     （通用样式文件）
            ├─utils     （前端工具库）
            └─view      （前端页面）

```

## 配置文件(1.0)
```json
{
    "casbinconfig": {
        "modelPath": "./static/rbacmodel/rbac_model.conf"   // casbin模型地址
    },
    "jwt": {
        "signingKey": "qmPlus"   // jwt签名
    },
    "mysqladmin": {               // 数据库配置
        "username": "root",
        "password": "Aa@6447985",
        "path": "127.0.0.1:3306",
        "dbname": "qmPlus",
        "config": "charset=utf8\u0026parseTime=True\u0026loc=Local",
        "maxIdleConns": 10,
        "maxOpenConns": 100,
        "logMode": true
    },
    "qiniu": {                       // 七牛云密钥管理
        "accessKey": "25j8dYBZ2w**************62b8xiFguwxzZ",
        "secretKey": "pgdbqEsf7o****************dZ_VecFXPDeG5JY"
    },
    "redisadmin": {             // redis配置
        "addr": "127.0.0.1:6379",
        "password": "",
        "db": 0
    },
    "system": {          // 系统配置
        "useMultipoint": false,   // 是否开启多点登录拦截
        "env": "develop",       // 环境标识
        "addr": 8888            // 端口
    },
    "captcha": {            //验证码配置
        "keyLong": 6,
        "imgWidth": 120,
        "imgHeight": 40
    },
    "log": {                //日志配置
        "prefix": "[GIN-VUE-ADMIN]",
        "logFile": false,
        "stdout": ["DEBUG"],
        "file": ["WARNING"]
    }
}
```

## 配置文件(2.0)

```yaml
# Gin-Vue-Admin Global Configuration

# casbin configuration
casbin:
    model-path: './resource/rbac_model.conf'

# jwt configuration
jwt:
    signing-key: 'qmPlus'

# mysql connect configuration
mysql:
    username: root
    password: 'Aa@6447985'
    path: '127.0.0.1:3306'
    db-name: 'qmPlus'
    config: 'charset=utf8&parseTime=True&loc=Local'
    max-idle-conns: 10
    max-open-conns: 10
    log-mode: true
#sqlite 配置
sqlite:
    path: db.db
    log-mode: true
    config: 'loc=Asia/Shanghai'
# oss configuration
qiniu:
    access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'
    secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'

# redis configuration
redis:
    addr: '127.0.0.1:6379'
    password: ''
    db: 0

# system configuration
system:
    use-multipoint: false
    env: 'public'  # Change to "develop" to skip authentication for development mode
    addr: 8888
    db-type: "mysql"  # support mysql/sqlite

# captcha configuration
captcha:
    key-long: 4
    img-width: 120
    img-height: 40

# logger configuration
log:
    prefix: '[GIN-VUE-ADMIN]'
    log-file: true
    stdout: 'DEBUG'
    file: 'DEBUG'

```

## 推荐的开发模式

1. 运行项目，进入系统工具->代码生成器
2. 设计基础结构体模型，点击生成代码包 获取前后端基础代码
3. 前端代码添加进入api并自行重命名，后端代码放入适合自己开发路径中 并注册结构体到数据库，注册路由到inirRouter（开发模式下，请自行注释掉自动生成代码中的鉴权中间件 .Use(middleware.JWTAuth()).Use(middleware.CasbinHandler())  )方便开发
4. 前端创建vue文件，并到超级管理员->菜单管理->将对应路径添加进行菜单，进入角色管理，将刚配置的菜单添加进入，重启前端项目，开始绘制页面，书写交互。
5. 接口调通以后，到超级管理员->api管理中添加已经调通的路由，进入角色管理，将调通的路由配置进入角色权限。
6. 简单几步过后，一个包含鉴权，动态菜单的前后端全栈功能就搞定了。

::: tip 提示
目前代码生成器仅支持单表，后期会逐步支持关联表模式，复杂数据结构目前还需要辛苦大家自行设计
:::