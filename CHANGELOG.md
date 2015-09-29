# 0.1.0

+ initial release

# 0.1.1

+ 修改npm scripts
+ 通过HTMLwrap类暴露TAG_TYPE, 而不是直接通过模块暴露
+ 组件的initialData方法注入config参数
+ 暴露用户自定义style文件到framework外
+ storage依赖js-cookie,抛弃jquery.cookie
+ 服务器端错误将stack信息暴露到前端，方便在不监控服务器log情况下调试bug
