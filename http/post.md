# post

## 请求参数
### body
#### form-data
     等价于http请求中的multipart/form-data,它会将表单的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。当上传的字段是文件时，会有Content-Type来表名文件类型；content-disposition，用来说明字段的一些信息。
     
     由于有boundary隔离，所以multipart/form-data既可以上传文件，也可以上传键值对，它采用了键值对的方式，所以可以上传多个文件。

#### x-www-form-urlencoded
等价于http请求中的application/x-www-from-urlencoded,会将表单内的数据转换为键值对，比如,grant_type=authorization_code&code=Z7cOp8&client_id=client1&client_secret=123456&redirect_uri=http%3A%2F%2Fbaidu.com&scope=test

#### raw
可以上传任意格式的文本，可以上传text、json、xml、html等。

#### binary
相当于Content-Type:application/octet-stream,从字面意思得知，只可以上传二进制数据，通常用来上传文件，由于没有键值，所以，一次只能上传一个文件。
