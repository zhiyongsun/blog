# mysql

## 修改本地密码
[链接](https://support.rackspace.com/how-to/mysql-resetting-a-lost-mysql-root-password/)

## 创建数据库
登陆之后
```base
create DATABASE RUNOOB;
```
## 删除数据库
```base
drop DATABASE RUNOOB;
```

## 选择数据库
```base
use RUNOOB;
```

## 数据类型
[数据类型](https://www.runoob.com/mysql/mysql-data-types.html)

## 创建数据表
```shell script
CREATE TABLE IF NOT EXISTS `runoob_tbl2`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

实例解析：
- 如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为NULL ，就会报错。
- AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1。
- PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
- ENGINE 设置存储引擎，CHARSET 设置编码。 

## 删除数据表
```shell script
DROP TABLE runoob_tbl
```
## 插入数据

```shell script
use RUNOOB;
INSERT INTO runoob_tbl 
    (runoob_title, runoob_author, submission_date)
    VALUES
    ("学习 PHP", "菜鸟教程", NOW());

INSERT INTO runoob_tbl
    (runoob_title, runoob_author, submission_date)
    VALUES
    ("学习 MySQL", "菜鸟教程", NOW());

INSERT INTO runoob_tbl (runoob_title, runoob_author, submission_date) VALUES ("JAVA 教程", "RUNOOB.COM", '2016-05-06');
```

## 更新语句
```shell script
UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;
```

## DELETE
```shell script
DELETE FROM runoob_tbl WHERE runoob_id=3;
```
##  LIKE 子句
 %字符来表示任意字符，类似于UNIX或正则表达式中的星号 *。
```shell script
SELECT * from runoob_tbl  WHERE runoob_author LIKE '%COM';
```

## UNION 操作符

```shell script
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
```

```shell script
SELECT runoob_title FROM runoob_tbl
UNION
SELECT runoob_title FROM runoob_tbl2
ORDER BY runoob_title;
```

## 排序
```shell script
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]
```
- 你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。

## 分组 GROUP BY 语句
```shell script
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```


使用 WITH ROLLUP

WITH ROLLUP 可以实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）。

```shell script
SELECT coalesce(name, '总数'), SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
```

## MySQL 连接的使用
SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询。
JOIN 按照功能大致分为如下三类：

- INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
- LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
- RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

## NULL 值处理
```shell script
IS NULL: 当列的值是 NULL,此运算符返回 true。
IS NOT NULL: 当列的值不为 NULL, 运算符返回 true。
```
## MySQL 事务
MYSQL 事务处理主要有两种方法：
### 1、用 BEGIN, ROLLBACK, COMMIT来实现

- BEGIN 开始一个事务
- ROLLBACK 事务回滚
- COMMIT 事务确认
### 2、直接用 SET 来改变 MySQL 的自动提交模式:

SET AUTOCOMMIT=0 禁止自动提交
SET AUTOCOMMIT=1 开启自动提交

## ALTER命令

当我们需要修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令。

 create table testalter_tbl (i INT,c CHAR(1));
 
 ### 删除，添加或修改表字段
 ```shell script
ALTER TABLE testalter_tbl  DROP i;
```
只剩余一个字段则无法使用DROP来删除字段。

#### 添加
```shell script
ALTER TABLE testalter_tbl ADD i INT;
```

#### 修改字段类型及名称

#### 修改表名

```shell script
ALTER TABLE testalter_tbl RENAME TO alter_tbl;
```


