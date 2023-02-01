Page({
	data:{
		content: 'wechat 数据绑定',
		hiddencontent: '隐藏的内容',
		flag: false,
		num1: 1,
		num2: 2,
		user: {
			name: "spark",
			age: 18		
		}
	},
	tapName: function(event) {
		console.log(event)
	}
}
)