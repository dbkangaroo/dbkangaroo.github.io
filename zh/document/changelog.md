---
title: 版本更新记录
lang: zh-CN
---

# Kangaroo change timeline

## [Kangaroo v0.29.1.200713](/zh/download/v0.29.1.200713)
1. 实现插件扩展系统
2. 实现一个简单的演示插件(example)
3. 更新 ArchLinux and MacOSX 安装包脚本
4. 更新便携式发布包(更具 *nix 风格)

## [Kangaroo v0.28.1.200629](/zh/download/v0.28.1.200629)
1. 实现查找替换功能
2. 更新中文语言翻译(zh-CN/zh-TW/zh-HK/zh-SG)

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.27.1.200622](/zh/download/v0.27.1.200622)
1. 改进 PostgreSQL 的智能提示数据
2. 改进智能提示之自动完成样式（增加图标、过滤支持）
3. 添加智能提示之函数参数自动提示功能
4. 添加复制选中列头功能（长短名）
5. 添加复制全部列头功能(TSV/CSV)
6. 更新发布包命名格式
7. 更新中文语言翻译

## [Kangaroo v0.26.1.200615](/zh/download/v0.26.1.200615)
1. 支持智能提示数据挖掘（SQLite/MySQL/PostgreSQL）
2. 支持编辑视图代码自动完成（v1）

## [Kangaroo v0.25.1.200601](/zh/download/v0.25.1.200601)
1. 为数据库空间导航栏添加上下文菜单
2. 为对象树数据库和模式节点添加查询.
3. 更新中文翻译(zh-CN/zh-TW/zh-HK/zh-SG).
5. 修复:  PostgreSQL 12: 表和视图未显示 #46
6. 修复:  MariaDB 10.5: 不存在的列 cons.ENFORCED #47
7. 修复:  PostgreSQL 12: 不存在的列 c.consrc #48
8. 修复:  PostgreSQL 11.7 / 9.6: 数据行不存在 #49
9. 修复:  MySQL 5.7.30: information_schema 不存在表 'CHECK_CONSTRAINTS' #50
10. 修复:  PostgreSQL 9.6: 不存在的列 c.relispartition #51
11. 修复:  PostgreSQL: 数据库模式显示错误
12. 修复:  数据网格列头显示错误（含有下划线字符_）

## [Kangaroo v0.24.1.200525](/zh/download/v0.24.1.200525)
1. 新增 SQL 格式化模块，支持美化和简化SQL.
2. 新增 archlinux 安装器(基于 HowardZorn 提交的PR #45 ).
3. 新增 苹果平台 安装器

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.23.1.200518](/zh/download/v0.23.1.200518)
1. 改进日期、日期时间选取控件.
2. 改进标题栏背景图片（颜色）.
3. 改进网格列标题.
4. 更新中文翻译.
5. 修复:  不能更新日期、日期时间类型数据.
6. 修复:  不能更新浮点类型数据.
7. 修复:  不能更新数值类型（Numeric）
8. 修复:  MySQL: 不能更新字符串数组类型(Char)
9. 修复:  PostgreSQL: SQL中名字错误
10. 修复:  数据网格工具栏状态错误.

## [Kangaroo v0.22.1.200511](/zh/download/v0.22.1.200511)
1. 增加中文语言翻译（简体中文[zh-CN//zh-SG]、繁体中文[zh-TW/zh-HK]）
2. SQLite: 新建数据库检查并增加扩展名(.sqlite).
3. 改进设计器、删除、刷新体验，可以定位到原对象.
4. 改进 Windows 平台自动化部署和安装脚本.
5. 修复:  重命名时奔溃的bug.
6. 修复:  删除对象时崩溃的bug.
7. 修复:  保存表设计器修改时崩溃的bug
8. 修复:  空表无法增加数据行
9. 修复:  及时模式无法保存追加行

## [Kangaroo v0.21.1.200504](/zh/download/v0.21.1.200504)
1. 重构整个DataGrid，为了更好的用户体验
2. DataGrid 支持三种编辑模式: LIVE / CACHE / TRANSACTION
3. DataGrid 支持复制粘贴多行操作
4. 当粘贴多行时，自动更新编辑模式为 CACHE 模式
5. 修复: 查询构建器 where 子句表达式错误

## [Kangaroo v0.20.1.200420](/zh/download/v0.20.1.200420)
1. 数据网格实现复制数据行到剪贴板功能（TSV 格式）
2. 重构表结构设计器弹出菜单.
3. 表结构设计器实现克隆功能.
4. 表结构设计器实现添加功能.
5. 表结构设计器实现多行支持（删除/上移/下移）.
6. 表结构设计器实现复制功能.
7. 表结构设计器实现剪切功能.
8. 表结构设计器实现粘贴功能.
9. 改进数据网格中文本处理性能.

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.19.1.200413](/zh/download/v0.19.1.200413)
1. 对象树上实现复制对象名称（长短名）.
2. 数据网格实现复制数据行为 SQL 语句(Insert/Update/Delete).
3. 数据网格实现复制数据行为 TSV 格式
4. 数据网格实现复制数据行为 CSV 格式
5. 数据网格实现复制数据行为 PHP 数组
6. 数据网格实现复制数据行为 JSON 格式
7. 改进分栏控件边样式.
8. 修复:  格式化BLOB数据时崩溃
9. 修复:  数据表无关键字字段时崩溃
10. 修复:  数据表关键字段中包含下划线时崩溃(_)
11. 修复:  字段空值告警
12. 修复:  错误调用告警(to_string)

## [Kangaroo v0.18.1.200406](/zh/download/v0.18.1.200406)
1. 加密保存用户密码.
2. 数据网格支持插入、克隆、删除操作.
3. 开始视图中支持数据库连接克隆
4. 数据库对象树支持导出表结构SQL到剪贴板和文件
5. 数据库对象树支持导出表结构SQL到编辑器中
6. 数据库对象树支持刷新操作
7. 改进工作区视图标题页展示行为
8. 修复:  修复目录树回车键行为
9. 修复:  修复打开表时崩溃行为（有空值）

## [Kangaroo v0.17.0.200323](/zh/download/v0.17.0.200323)
1. 支持SSH隧道方式连接数据库 (Windows, Linux/Unix and MacOS)
2. 数据库连接对话框增加连接测试功能
3. 重构数据表格上下文菜单
4. 数据库对象树菜单增加导出SQL（剪贴板和文件）菜单
5. 实现数据表格选择菜单功能（全选和反选）
6. 实现数据表格跳转到指定行菜单
7. 修复: 切换表格和表单时崩溃

## [Kangaroo v0.16.0.200316](/zh/download/v0.16.0.200316)
1. 数据库连接支持SSH隧道(Windows 未通过测试). 
2. 数据浏览页支持输入页面号切换
3. 改进对话框中的开关控件布局
4. 修复：Windows 版不能打开链接
5. 修复: 日志文件序号问题

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.15.0.200302](/zh/download/v0.15.0.200302)
1. 更新并分享 openssl.vapi，集成加密模块保护用户敏感数据. 
2. 改进语言支持(消息模版, zh_Hans and zh_Hant)
3. 改进首页资源加载性能（不在卡顿）
4. 应用网络代理设置
5. Linux: 切换首页浏览器视图为版本更新时间线视图
6. 使用下拉选择框代替编辑器

## [Kangaroo v0.14.0.200217](/zh/download/v0.14.0.200217)
1. SQLite: 支持创建新数据库
2. 重构数据库树向下文菜单
3. 集成OpenSSL用于支持保护用户密码
4. 右侧面板图标添加手指指针，用于提示可点击
5. 修复：第一次启动时的窗口大小

## [Kangaroo v0.13.0.200210](/zh/download/v0.13.0.200210)
1. 数据网格应用格式设置
2. SQL编辑器应用格式设置
3. Windows 32位版本支持
4. 实现SSH隧道初步支持
5. 微调数据库连接对话框（完善配置保存和加载）
6. 修复连接首页图标bug

## [Kangaroo v0.12.1.200120](/zh/download/v0.12.1.200120)
1. 新增应用配置对话框，可加载和保存应用配置
2. 界面增加「夜间模式」支持
3. 使用新配置模型重构连接对话框
4. 使用新配置模型重构连接开始页面

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.11.1.200113](/zh/download/v0.11.1.200113)
1. 重新设计连接对话框，支持SSH、SSL、高级设置；
2. 首页增加捐赠图片展示 (Paypal/Wechat/Alipay)
3. 重新设置配置模型和文件(init --> json)
4. 在窗口标题栏使用符号图标(#25)
5. 修复：表格中编辑数据会批量更新的bug

## [Kangaroo v0.11.0.200106](/zh/download/v0.11.0.200106)
1. 增加程序首页，展示版本更新列表或显示网站首页（Linux）
2. 重新实现 DSV 格式引擎
3. 改进 CSV 格式与其它工具的兼容性
4. 改进 DSV 格式设置UI布局
5. 改进日期在线编辑控件，支持即时编辑
6. 修复: 生成错误的SQL语句.
7. 修复: 导入数据时奔溃.
8. 修复: 无法保存数据网格中编辑的数据
9. 修复: 修复一些控制台警告

## [Kangaroo v0.10.0.191223](/zh/download/v0.10.0.191223)
1. 增加导出向导用户界面
2. 支持批量导出数据表为文件
3. 支持多达7种数据格式(DSV/JSON/XML/HTML/Markdown/SQL)
4. 支持数据字段重名（别名或标题）

## [Kangaroo v0.9.5.191216](/zh/download/v0.9.5.191216)
1. 支持从DSV（CSV、TSV）格式文件导入数据
2. 支持从JSON格式文件导入数据
3. 支持XML格式文件导入数据
4. 使用libxml2库重写导出数据为XML格式
5. 增加导出助理界面
6. 初步实现导出格式、导出表选择页面

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.9.4.191209](/zh/download/v0.9.4.191209)
1. 实现文件导入处理结果界面
2. 数据导入增加5中导入模式（追加、更新、合并、删除、替换）
3. 实现导入数据到表中（SQLite）
4. 重构对话框，增加翻译、艺术家和许可证信息，修复Mac和Ubuntu平台无法展示图片的问题；

## [Kangaroo v0.9.3.191202](/zh/download/v0.9.3.191202)
1. 实现工具页用于支持导入、导出功能
2. 增加IDE相关接口，用于后续重构支持；

## [Kangaroo v0.9.2.191125](/zh/download/v0.9.2.191125)
1. 实现从文件导入数据功能（DSV/XML/JSON） #19
    - 实现文件导入格式、编码和预览界面
    - 实现文件导入格式参数设置界面
    - 实现文件导入解析数据预览界面
    - 实现文件导入字段映射界面（功能未实现）
    - 实现文件导入处理进度界面（功能未实现）
    - 实现文件导入之DSV格式解析和预览支持
    - 实现数据字段和目标表字段映射支持

## [Kangaroo v0.9.1.191118](/zh/download/v0.9.1.191118)
1. 支持导出数据到剪贴板或文件 #18
   - 支持导出为 DSV 格式(CSV/TSV/...)
   - 支持导出为 JSON 格式；
   - 支持导出为 XML 格式
   - 支持导出为 HTML 格式
   - 支持导出为 SQL 格式（INSERT）
   - 支持导出为 Markdown 格式
2. 改进保存文件对话框文件过滤条件，提升用户体验

## [Kangaroo v0.9.0.191111](/zh/download/v0.9.0.191111)
1. 支持数据库表结构编辑和保存 #5
2. 支持导出为JSON和DSV格式

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.8.5.191104](/zh/download/v0.8.5.191104)
1. 支持表结构编辑和保存（SQLite、PostgreSQL 预览版） #5
2. 增加了数据导出的UI和接口
3. 新建表保存时同步更新Tab页面标题

## [Kangaroo v0.8.4.191028](/zh/download/v0.8.4.191028)
1. 重组数据库对象树和界面 #17
2. 增加数据库对象树刷新菜单
3. 实现多个数据库支持
4. 编辑表结构并保存(MySQL 预览) #5

## [Kangaroo v0.8.3.191021](/zh/download/v0.8.3.191021)
1.  新建连接时出现插件未加载错误 #12
2. 增加 MacOS 平台编译支持 #13
3. 重构数据库对象模型并改进互操作性

## [Kangaroo v0.8.2.191014](/zh/download/v0.8.2.191014)
1. 改进字段选择对话框，支持根据值选择字段 #9
2. 改进表设计器支持 Tab 键 #3
3. 修复:  字段表达式对话框重加载失败 #10
4. 修复:  开始菜单和桌面快捷键和图标 #7
5. 修复:  SQL 语法高亮支持 #8
6. 修复:  数据表单加载失败 #11

<div>
    <script2 type="text/javascript" async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3975819313740938"
        data-ad-slot="6760827895"></ins>
    <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
</div>

## [Kangaroo v0.8.1.190930](/zh/download/v0.8.1.190930)
1. 改进：生成正确的编辑 SQL 语言
2. 重构: 增加源代码编辑模块
3. 改进：SQLite 模式SQL生成器
4. 修复: 编辑器无法正确显示空白行
5. 修复: 新增好行时获取字符串失败（控制台告警）
6. 修复: 编辑表结构时控制台报错

## [Kangaroo v0.8.0.190923](/zh/download/v0.8.0.190923)
1. 实现 PostgreSQL SQL 生成器(11.0)
2. 实现保存表结构到数据库（只创建）
3. 更新构建脚本：隐藏控制台窗口
4. 更新Windows安装程序：增加 MySQL 和 PostgreSQL 客户端库
5. 更新关于对话框中的链接
6. 改进单行编辑器控件（自动聚焦）
7. 更新忙状态时的界面光标

## [Kangaroo v0.7.2.190916](/zh/download/v0.7.2.190916)
1. 实现 PostgreSQL 11 加载器
2. 实现 PostgreSQL 11 表设计表单
3. 重构项目目录
4. 创建项目网站项目：dbkangaroo.github.io
5. 增加 Windows 安装器脚本

## Kangaroo v0.6.0.190601
1. 实现数据网格中编辑和保存功能
2. 实现表单编辑和保存功能
3. 实现国际化支持(I18N)
4. 实现中文语言翻译
 
## Kangaroo v0.4.0.190501
1. 实现数据翻页功能
2. 实现查询构建器和应用
3. 实现导出数据为CSV文件
4. 实现系统日志输出视图
5. 实现编辑和执行SQL
6. 实现多个查询结果支持

## Kangaroo v0.2.0.190401
1. 增加连接设置界面
2. 增加连接管理模块
3. 实现加载并显示数据库对象树
4. 实现打开并显示表数据