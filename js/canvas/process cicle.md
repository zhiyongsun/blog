---
title: canvas 进度圆
categories: js
tags: arguments
abbrlink: 53010
date: 2017-05-03 22:00:00
---

以前使用css3画了一个进度条,挺复杂的,而且有点瑕疵,使用canvas从新写了个,挺简单的,打那么如下:    
HTML:
`<canvas id="canvas"></canvas>`

JS:


			function process(canvasid, legth, process, innerLength,color) {
				var canvas = document.getElementById(canvasid);
				var context = canvas.getContext('2d');
				var scale = window.devicePixelRatio;
				var center = [legth / 2 * scale, legth / 2 * scale];
				canvas.style.width = legth + "px";
				canvas.style.height = legth + "px";
				canvas.width = legth * scale;
				canvas.height = legth * scale;
				//开始画一个灰色的圆
				context.beginPath();
				context.moveTo(center[0], center[1]);
				context.arc(center[0], center[1], center[0], 0, Math.PI * 2, false);
				context.closePath();
				context.fillStyle = '#e6e5e5';
				context.fill();

				/*画进度条*/
				if (process != 0 && process != 100) {
					context.beginPath();
					context.moveTo(center[0], center[1]);
					if (process < 25) {
						context.arc(center[0], center[1], center[0], Math.PI * 1.5, Math.PI * (1.5 + 0.5 * (process / 25)), false); //设置圆弧的起始于终止点
					} else {
						context.arc(center[0], center[1], center[0], Math.PI * 1.5, Math.PI * 2 * ((process / 100) - 0.25), false); //设置圆弧的起始于终止点
					}
					context.closePath();
					context.fillStyle = color;
					context.fill();
				} else if (process == 100) {
					context.beginPath();
					context.moveTo(center[0], center[1]);
					context.arc(center[0], center[1], center[0], 0, Math.PI * 2, false); //设置圆弧的起始于终止点
					context.closePath();
					context.fillStyle = color;
					context.fill();
				}
				/*画中心空白*/
				context.beginPath();
				context.moveTo(center[0], center[1]);
				context.arc(center[0], center[1], innerLength / 2, 0, Math.PI * 2, true);
				context.closePath();
				context.fillStyle = 'rgba(255,255,255,1)';
				context.fill();
			}
			process("canvas", 76, 59, 60,"deepskyblue");
`
