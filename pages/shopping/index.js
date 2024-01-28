// js
// 假数据
let List = [
	{
		"LeftId": 1,
		"LeftName": "体验乡村生活",
		"RightList": [
		{
			"RightId": 11,
			"RightName": "商品11"
		},
		]
	},
	{
		"LeftId": 2,
		"LeftName": "特色农产品",
		"RightList": [
		{
			"RightId": 21,
			"RightName": "商品21"
		},
		]
	},
]

Page({
	/**	
	 * 页面的初始数据
	 */
	data: {
		List : List,
		selectLeftId : null,
		selectRightId : null,
		currentIndex_L : null,
		currentIndex_R : null,
		scrollTop : 0
	},
	
	/**
	 * 左导航点击事件
	 */
	bindleLeftItemTap(e) {
		const {index} = e.currentTarget.dataset;
		this.setData({
			currentIndex_L:index,
			currentIndex_R : null,
			selectLeftId : this.data.List[index].LeftId,
			selectRightId : null,
			scrollTop : 0,
		}) 
	},

	/**
	 * 右导航点击事件
	 */
	bindleRightItemTap(e) {
		const {index} = e.currentTarget.dataset;
		let index_L = this.data.currentIndex_L;
		this.setData({
			currentIndex_R : index,
			selectRightId : this.data.List[index_L].RightList[index].RightId,
		}) 
	},

	/**
	 * 底部查看详情按钮点击事件
	 */
	toDetail(e) {
		var selectLeftId = this.data.selectLeftId;
		var selectRightId = this.data.selectRightId;

		if(selectLeftId === null){
			wx.showToast({
				title: '请选择一种分类或商品！',
				icon: 'none',
				duration: 1500,
				mask: true
			});
			return;
		}
		if(selectRightId != null) {
			wx.navigateTo({
				url: '/pages/Detail/Detail' + '?' +
				'selectLeftId=' + selectLeftId + 
				'&selectRightId=' + selectRightId,
				});
			}
			else {
				wx.navigateTo({
				url: '/pages/Detail/Detail' + '?' +
				'&selectLeftId=' + selectLeftId,
			});
		}	
	},
})
