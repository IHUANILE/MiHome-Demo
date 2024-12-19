// 当整个文档被完全加载和解析完成后，会触发 DOMContentLoaded 事件。
// 此时，我们可以安全地访问和操作页面中的 DOM 元素。
document.addEventListener('DOMContentLoaded', function() {
	// 使用 querySelectorAll 方法选择文档中所有具有 .switch_bg 类的元素。
	// 这将返回一个 NodeList 对象，其中包含所有匹配的元素。
	var switchBgs = document.querySelectorAll('.switch_bg');

	// 遍历 NodeList 对象中的每个元素。
	// forEach 方法会为 NodeList 中的每个元素执行一次提供的回调函数。
	// 在每次回调函数调用时，当前的 .switch_bg 元素会被作为参数传递给函数（这里命名为 switchBg）。
	switchBgs.forEach(function(switchBg) {
		// 为当前的 .switch_bg 元素添加一个点击事件监听器。
		// 当这个元素被点击时，会触发提供的回调函数。
		switchBg.addEventListener('click', function() {
			// 在回调函数中，this 关键字指向触发事件的元素，即当前的 .switch_bg 元素。
			// 使用 classList.toggle 方法切换 .active 类的添加和移除。
			// 如果 .active 类已经存在于元素上，它会被移除；如果不存在，它会被添加。
			this.classList.toggle('active');
		});
	});
});