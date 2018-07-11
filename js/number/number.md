# number

## toString()
    - 用法
        -NumberObject.toString(radix)
    - radix	
        - 可选。规定表示数字的基数，使 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。但是要注意，如果该参数是 10 以外的其他值，则 ECMAScript 标准允许实现返回任意值。
    - 返回值
        - 数字的字符串表示。例如，当 radix 为 2 时，NumberObject 会被转换为二进制值表示的字符串。
        
## toLocaleString()
    - 定义和用法
        - toLocaleString() 方法可把一个 Number 对象转换为本地格式的字符串。
    - 语法
        - NumberObject.toLocaleString()
    - 返回值
        -   数字的字符串表示，由实现决定，根据本地规范进行格式化，可能影响到小数点或千分位分隔符采用的标点符号。

## toExponential()
    - 定义和用法
        - toExponential() 方法可把对象的值转换成指数计数法。
    - 语法
        - NumberObject.toExponential(num)
    - 参数
        - 必需。规定指数计数法中的小数位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将使用尽可能多的数字。
        
## toPrecision（）
    - 定义和用法
        - toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。
    - 语法
        - NumberObject.toPrecision(num)
    - 必需。规定必须被转换为指数计数法的最小位数。该参数是 1 ~ 21 之间（且包括 1 和 21）的值。有效实现允许有选择地支持更大或更小的 num。如果省略了该参数，则调用方法 toString()，而不是把数字转换成十进制的值。
   
    
      

        

