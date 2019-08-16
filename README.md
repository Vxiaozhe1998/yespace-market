# yespace-market
这是悠悦跳蚤市场

# 自定义多选框：

**在html页面添加如下代码：**

```html
<script>
	CSS.paintWorklet.addModule('asserts/js/Checkbox.js')
	CSS.registerProperty({
		name: "--bg-color",
		syntax: "<color>",
		initialValue: "#fff"
	});
	CSS.registerProperty({
		name: "--border-color",
		syntax: "<color>",
		initialValue: "#fff"
	});
	CSS.registerProperty({
		name: "--line-color",
		syntax: "<color>",
		initialValue: "#fff"
	});
	const changeIndeterminate = document.querySelector('#changeIndeterminate')
	const checkbox = document.querySelectorAll('.custom-checkbox')[0]
	const checkbox1 = document.querySelectorAll('.custom-checkbox')[1]
	checkbox.indeterminate = true
	checkbox1.indeterminate = true
	changeIndeterminate.addEventListener('click', () => {
		checkbox.indeterminate = !checkbox.indeterminate
		checkbox1.indeterminate = !checkbox1.indeterminate
	})
</script>

```

代码添加位置要在<body></body>标签中。

即：

```html
<body>
	<div>
	…
	</div>
	<script>
	在此位置
	</script>
</body>
```

在使用该自定义多选框时请在<input/>标签中添加custom-checkbox类，即：

```html
<input type='checkbox' name='f2f' class='custom-checkbox'/>
```

# 自定义滚动栏：

父容器中样式overflow属性一定要设置成scorll

在使用的时候在文本/区域所属div添加box6类，即：

```html
<div class=”box6”>
```

# 提示框使用：

在html的<body></body>标签中添加如下代码：

```html
<div class="father" style="z-index: 9999;display: none;" id="在此添加ID">
				<div style="background: white;" class="son float-instruction shadow-irreguler">
					<div style="width: 100%;height: 0 auto; background-color: var(--fColor);">
						<div class="container-fluid" style="padding: 0rem;">
							<div class="row" style="padding: 0rem;margin: 0;">
								<div class="col-10" align="center" style="padding:0rem;color: white;font-weight: bold;font-size: 4vw;">
									在此添加标题
								</div>
								<div class="col-2" align="right" style="padding-right: 3vw">
									<svg class="icon" aria-hidden="true" style="font-size: 6vw;color: white;" onclick="close_instruction('在此添加ID')">
										<use xlink:href="#icon-guanbi"></use>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div style="height: 70%;width: 90%;margin-top: 6vw;" class="son box6 tip-css">
						在此添加内容
					</div>
				</div>
			</div>

```

具体使用方式如下：

将代码中的ID添加好包括首行div的id以及svg中的id，即可实现点击关闭按钮提示框隐藏，其中的两个ID必须相同。

在你使用的点击出现的元素中添加onclick事件，调用open_instruction("在此添加ID")函数，函数中的ID必须与上文相同，即可实现点击出现。

# 更改<img/>标签中的SVG颜色

在img标签中使用svg类以及定义一个自己的类：

实例：

```html
<img class="svg progress-zhe" src="asserts/img/spinner.svg" />
```

在css中：

```css
.progress-zhe {
       fill: var(--fColor);/*在此修改颜色*/
       width: 100%;
}
```

# 使用主题色：

**使用：var(--fColor),var(--sColor);**

**例：**

**fill: var(--fColor);**

**background-color: var(--fColor);**

另外，请引入如下内容，在<head>标签内：

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
<!-- CSS库 -->
<!-- Bootstrap -->
<link rel="stylesheet" href="asserts/plugins/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="asserts/CSS/yespaceCss.css" />
<!-- JS库 -->
<script src="asserts/js/jquery.min.js" type="text/javascript"></script>
<script src="asserts/js/Yespacejs.js" type="text/javascript"></script>
<script src="asserts/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="http://at.alicdn.com/t/font_1306353_relcrq316p.js" type="text/javascript"></script>
```