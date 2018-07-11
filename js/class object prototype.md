---
title: prototype
categories: js
tags: prototype
abbrlink: 18061
date: 2017-02-08 22:00:00
---

# prototype
```js
function People(name)  {  
    this.name=name;  
    //对象方法  
    this.Introduce=function(){  
        alert("My name is "+this.name);  
    }  
}

//类方法  
People.Run=function(){  
    alert("I can run");  
}  

//原型方法  
People.prototype.IntroduceChinese=function(){  
    alert("我的名字是"+this.name);  
}  

//测试  
  
var p1=new People("Windking");  
  
p1.Introduce(); //对象方法需要通过实例化对象去调用  
  
People.Run();   //类方法不需要通过实例化对象去调用  
  
p1.IntroduceChinese(); //原型方法也需要通过实例化对象去调用  

```

1、对象方法包括构造函数中的方法以及构造函数原型上面的方法；    
2、类方法，其实这里的类就是一个函数，在js中由于函数也是一个对象，所以可以为函数添加属性以及方法，这种方法在node中用的比较多；    
3、原型方法一般用于对象实例共享，比如Person.prototype.sayName=function(){console.log(this.name);};在原型上面添加该方法，就能实现共享。这样就不用每一次初始化一个实例的时候，为其分配相应的内存了。
