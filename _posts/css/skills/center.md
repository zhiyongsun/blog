---
title: 底部垂直居中
category: css
tags: ['css']
date: 2017-02-07 22:00:00
---
1 底部对齐,父元素position:relative;,子元素position:absolut;bottom:0;
2 底部居中:看如下类: Absolute-Center
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			.Absolute-Center {
				margin: auto;
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
			}
		</style>
	</head>

	<body>
		<div class="a" style="width: 100%; height: 100px; background:blue;position:relative;align:bottom;">
			<div class="Absolute-Center" style=" width: 50px; height: 50px; background: red;"></div>
		</div>
	</body>

</html>
