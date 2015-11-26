# 0.1.0

+ initial release

# 0.1.1

+ 修改npm scripts
+ 通过HTMLwrap类暴露TAG_TYPE, 而不是直接通过模块暴露
+ 组件的initialData方法注入config参数
+ 暴露用户自定义style文件到framework外
+ storage依赖js-cookie,抛弃jquery.cookie
+ 服务器端错误将stack信息暴露到前端，方便在不监控服务器log情况下调试bug
+ 增加图片上传模块，图片存储服务依赖阿里云OSS
+ 允许配置跨域访问
+ 增加服务器端redirect策略

# 0.1.2

+ gulpfile watch webpack增加意外重启机制
+ reset.less和global.less由wrap引入
+ server端注入全局变量，并暴露__DIST__全局变量

# 0.1.3

+ 暴露__MOBILE__等变量到路由props中
+ css utils 调整respon方法的通用性
+ 修复路由空component导致的错误
