(function(){
	// 给$函数进行扩展
	$.extend({
		min: function(a, b){
			return a > b ? b : a
		},
		max: function(a, b){
			return a > b ? a : b
		},
		leftTrim: function(str){
			return str.replace(/^\s+/, '')
		},
		rightTrim: function(str){
			return str.replace(/\s+$/, '')
		}
		
	})
	// 给$()对象进行扩展
	$.fn.extend({
		checkAll: function(){
			this.prop("checked", true)  // 由于这里是jquery对象调用的，所以this指jquery对象
		},
		unCheckAll: function(){
			this.prop("checked", false)  // 由于这里是jquery对象调用的，所以this指jquery对象
		},
		reverseCheck: function(){
			this.each(function(){  // 由于这里是jquery对象调用的，所以this指jquery对象
				this.checked = !this.checked    // 这里的this是dom对象
			})
		}
	})
})()