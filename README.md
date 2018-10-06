# ColorBar
仿写[`ventusky`](https://www.ventusky.com/)的一款超简单的颜色条，非渐变样式

项目介绍：
====
这是一个超级超级简单的非渐变式颜色条
<br>项目使用了`JQuery`库<br>

兼容性
====
已测试Google Chrome浏览器、 FireFox浏览器、IE11浏览器可用，其他浏览器请自测

效果预览
====
![Image text](https://github.com/Victorfy1214/ColorBar/blob/master/preview/preview.png)

使用方法
====

引用样式`color-bar.css`文件
```html
 <link rel="stylesheet" href="css/color-bar.css">
 ```
 
 引用JQuery库
 ```html
 <script src="js/jquery.min.js"></script>
 ```
 在`body`标签中添加如下标签
 ```html
<div class = "color-wrapper"></div>
 ```
 引用`color-bar.js`文件
  ```html
<script src="js/color-bar.js"></script>
 ```
 
 新建ColorBar对象
 ```javascript
let mColorBar = new ColorBar();
 ```
 设置颜色池，根据您的需求定制
 ```javascript
   mColorBar.setColorPool(array);
   
   /*默认颜色池为
   ["rgb(43, 0, 1)",
    "rgb(107, 21, 39)",
    "rgb(175, 46, 90)",
    "rgb(229, 109, 83)",
    "rgb(234, 164, 62)",
    "rgb(235, 215, 53)",
    "rgb(190, 228, 61)",
    "rgb(89, 208, 73)",
    "rgb(75, 182, 152)"]*/
 ```
 设置颜色阈值池,根据您的需求定制
 ```javascript
    mColorBar.setColorThreshold(array);
      //默认阈值池为
      //[50,40,30,25,20,15,10,5,0]
 ```
 设置colorBar的标题
 ```javascript
    mColorBar.setTitle('温度');//例如温度
 ```
调用函数生成colorBar
 ```javascript
   mColorBar.generateColorBar(20);//其中参数作用为控制colorBar中小于参数值的文字的颜色为黑色，本例中小于20的颜色阈值文字都为黑色
 ```
 
封装方法介绍
====

* `setColorPool`： 此方法用于设置颜色池，参数`param`，传入你的颜色池数组
* `setColorThreshold`：该方法用于设置颜色阈值，参数`param`，传入你的颜色阈值池数组
* `setTitle`：该方法用于设置colorBar的标题文字
* `generateColorBar`：该方法用于生成ColorBar
