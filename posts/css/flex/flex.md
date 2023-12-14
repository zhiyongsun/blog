---
title: flex
category: css
tags: ['flex']
date: 2017-02-03 22:00:00
---

## 一、容器的属性



| 属性             |   描述      |          
| -------------   | ------------| 
| flex-direction  | 决定主轴的方向（即项目的排列方向）。 | 
| flex-wrap       | 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。      |  
| flex-flow       | 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。      |   
| justify-content | 定义了项目在主轴上的对齐方式。              | 
| align-items     | 定义项目在交叉轴上如何对齐。     |  
| align-content   | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。|   



1. flex-direction：  
决定主轴的方向（即项目的排列方向）。 

|   属性  |   描述   |
|-----   |------    |
|   row  |   默认值，主轴为水平方向，起点在左端。   |
|   row-reverse  |   主轴为水平方向，起点在右端。   |
|   column  |   主轴为垂直方向，起点在上沿。   |
|   column-reverse  |   主轴为垂直方向，起点在下沿。   |


2. flex-wrap

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。   

|   属性  |   描述   |
|-----   |------    |
|   nowrap  |   默认值,不换行   |
|   wrap  |   换行，第一行在上方   |
|   wrap-reserse  |   换行，第一行在下方   |

3. flex-flow 
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

4. justify-content  
定义项目在主轴上的对其方式  

|   属性  |   描述   |
|-----   |------    |
|   flex-start  |   默认值,左对齐   |
|   flex-end  |   右对齐  |
|   center  |   居中   |
|   space-between  |   两端对齐，项目之间的间隔相等   |
|   space-arround  |   每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。  |

5. align-items  
属性定义项目在交叉轴上如何对齐。

|   属性  |   描述   |
|-----   |------    |
|   flex-start  |   默认值,不换行   |
|   flex-end  |   交叉轴的终点对齐   |
|   center  |   交叉轴的中点对齐   |
|   baseline  |   项目的第一行文字的基线对齐   |
|   stretch  |   默认值，如果项目未设置高度或设为auto，将占满整个容器的高度   |

6. align-content  
属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

|   属性  |   描述   |
|-----   |------    |
|   flex-start  |   与交叉轴的起点对齐   |
|   flex-end  |   与交叉轴的终点对齐   |
|   center  |   与交叉轴的中点对齐  |
|   space-between  |   与交叉轴两端对齐，轴线之间的间隔平均分布。  |
|   space-around  |   每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍  |
|   stretch  |   （默认值）：轴线占满整个交叉轴  |



#### 二、项目的属性

1. order  
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。


2. flex-grow  
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

3. flex-shrink属性  
属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

4. flex-basis属性  
定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

5. flex属性  
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

6. align-self属性  
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

|   属性  |   描述   |
|-----   |------    |
|   flex-start  |   与交叉轴的起点对齐   |
|   flex-end  |   与交叉轴的终点对齐   |
|   center  |   与交叉轴的中点对齐  |
|   space-between  |   与交叉轴两端对齐，轴线之间的间隔平均分布。  |
|   space-around  |   每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍  |
|   stretch  |   （默认值）：轴线占满整个交叉轴  |





















