/*
 1. 鼠标移入显示,移出隐藏
 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */



$(function() {

	showMainWords()
	showShareIcon()
	showAddress()
	changeTabs()
	showMiniCars()
	changeProducts()
	showSmallImage()
	showMiddleImage()
	showLargeMirror()



	// 3. 输入搜索关键字, 列表显示匹配的结果
	function showMainWords() {
		// 选择框
		let txtSearch = $("#txtSearch")
		// 展示div
		let search_helper = $("#search_helper")

		txtSearch.on('keyup focus', function() {
			let str = $(this).val().trim()
			if (str) {
				search_helper.show()
			}
		}).blur(function() {
			search_helper.hide()
		})
	}

	// 4. 点击显示或者隐藏更多的分享图标
	function showShareIcon() {
		let shareMore = $("#shareMore")
		let dd = $("#dd")
		let b = shareMore.children(":first")
		let close = true
		$("#shareMore").click(function() {
			if (close) {
				dd.css("width", 200)
				b.addClass("backword")
				console.log(shareMore.siblings("a:gt(2):lt(5)"));
				shareMore.siblings("a:gt(2):lt(5)").show()
				close = false
			} else {
				dd.css("width", 155)
				b.removeClass("backword")
				shareMore.siblings("a:gt(2):lt(5)").hide()
				close = true
			}
		})
	}

	// 5. 鼠标移入移出切换地址的显示隐藏
	function showAddress() {
		// 获得地址元素
		let store_select = $("#store_select")
		// 获得展示的详细地址和关闭图标
		let store_content = $("#store_content")
		let store_close = $("#store_close")
		store_select.hover(function() {
			store_content.show()
			store_close.show()
		}, function() {
			store_content.hide()
			store_close.hide()
		})

		store_close.click(function() {
			$(this).hide()
			store_content.hide()
		})
	}

	// 6. 点击切换地址tab
	function changeTabs() {
		$("#store_tabs>li").click(function() {
			$(this).siblings().removeClass("hover")
			$(this).addClass("hover")
		})
	}

	// 7. 鼠标移入移出切换显示迷你购物车
	function showMiniCars() {
		$("#minicart").hover(function() {
			$(this).addClass("minicart")
			$(this).children(":last").show()
		}, function() {
			$(this).removeClass("minicart")
			$(this).children(":last").hide()
		})
	}

	// 8. 点击切换产品选项 (商品详情等显示出来)
	function changeProducts() {
		// 获取tab选项
		let tabs = $("#product_detail>ul>li")
		// 获取对应的展示页
		let showTabs = $("#product_detail").children("div:gt(0)")
		tabs.click(function() {
			// 获取对应tab点击时在同辈元素中的位置
			let index = $(this).index()
			$(this).siblings().removeClass("current")
			$(this).addClass("current")
			showTabs.hide()
			showTabs[index].style.display = "block"

		})
	}

	// 9. 点击向右/左, 移动当前展示商品的小图片
	function showSmallImage() {
		// 寻找左右按钮
		let leftIcon = $("#preview>h1>a").first()
		let rightIcon = $("#preview>h1>a").last()
		// 图片的容器
		let icon_list = $("#icon_list")
		// 容器内最多展示的图片数量
		const SHOW_COUNTS = 5
		// 点击的次数
		let count = 0
		// 获取单个图片的宽度
		let imgWidth = $("#icon_list>li").first().width()
		// 获取总共有多少张图片
		let totalCounts = $("#icon_list>li").size()

		leftIcon.attr("class", "backward_disabled")
		rightIcon.attr("class", "forward")

		// 右边按钮
		rightIcon.click(function() {
			// 如果已经达到最右边
			if ((SHOW_COUNTS + count) == totalCounts) {
				console.log(count, totalCounts)
				rightIcon.attr("class", "forward_disabled")
				return
			}
			count++;
			let left = -imgWidth * count
			icon_list.css("left", left)
			leftIcon.attr("class", "backward")


		})
		// 左边按钮
		leftIcon.click(function() {
			// 如果已经达到最左边
			console.log(count)
			if (count == 0) {
				leftIcon.attr("class", "backward_disabled")
				return
			}
			count--;
			let left = -imgWidth * count
			icon_list.css("left", left)
			rightIcon.attr("class", "forward")


		})

	}

	// 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
	function showMiddleImage() {
		// 中图显示的位置
		let mediumImg = $("#mediumImg")
		// 找到小图所在的容器
		let smallImage = $("#icon_list>li")
		smallImage.hover(function() {
			smallImage.children().attr("class", "")
			$(this).children("img").first().attr("class", "hoveredThumb")
			// 获取中图的src
			let src = $(this).children("img").attr("src").replace(".jpg", "-m.jpg")
			mediumImg.attr("src", src)
		}, function() {
			$(this).children("img").first().attr("class", "")
		})

	}

	// 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
	function showLargeMirror() {
		// 获得中图元素
		let mediumImg = $("#mediumImg")
		// 小黄块
		let mask = $("#mask")
		// 小黄快的宽度
		let maskWidth = mask.width()
		// 小黄快的高度
		let maskHeight = mask.height()
		// 中图元素所在的容器
		let maskTop = $("#maskTop")
		// 中图元素的宽度和高度
		let maskTopWidth = maskTop.width()
		let maskTopHeight = maskTop.height()
		
		// 获取大图的容器
		let largeImgContainer = $("#largeImgContainer")
		// 获取加载图
		let loading = $("#loading")
		// 获取大图元素
		let largeImg = $("#largeImg")

		
		maskTop.hover(function() {
			// 小黄快显示
			mask.show()
			// 动态加载对应的大图
			// 得到中图的src
			let src = mediumImg.attr("src").replace("-m", "-l");
			largeImg.attr("src", src)
			largeImgContainer.show()
			
			// 绑定大图加载完成时的监听
			largeImg.on("load", function(){
				// 得到大图的尺寸
				let largeWidth = largeImg.width()
				let largeHeight = largeImg.height()
				console.log(largeWidth, largeHeight);
				
				// 设置大图容器的尺寸
				largeImgContainer.css({
					width: largeWidth/2,
					height: largeHeight/2
				})
				// 隐藏加载图
				loading.hide()
				// 大图显示
				largeImg.show()
				
				maskTop.mousemove(function(event) {
					/*1. 移动小黄块*/
					// 小黄快的left和height
					let left = 0
					let top = 0
					// 获取鼠标的坐标
					let eventLeft = event.offsetX
					let eventTop = event.offsetY
					left = eventLeft - maskWidth / 2
					top = eventTop - maskHeight / 2
					if(left <= 0 ){
						left = 0 
					}else if(left >= (maskTopWidth-maskWidth) ){
						left = maskTopWidth-maskWidth
					}
					
					if(top <= 0){
						top = 0
					}else if(top >= (maskTopHeight - maskHeight)){
						top = maskTopHeight - maskHeight
					}
					mask.css({
						"left": left,
						"top": top
					})
					
					/*1. 移动大图*/
					// 得到大图的坐标
					left = -left * largeWidth / maskTopWidth
					top = -top * largeHeight / maskTopHeight
					largeImg.css({
						left: left,
						top: top
					})
					
				})
			})
			

		}, function() {
			mask.hide()
			largeImg.hide()
			largeImgContainer.hide()
		})
	}
})
