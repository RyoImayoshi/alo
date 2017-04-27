/* (c) 2017 Messagewall inc. */
/**
 * ChannelList画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	module.controller("ChannelListCtrl", function() {
		channelNavi = document.getElementById('mwChannelNavi');
		
		this.channelList = 
		[
			{
				key:'job',
				channelName:'職業',
				channelNameEn:'Job',
				bgCnt:'350',
				exCnt:'20',
				channelDetailList:[
				{
					channelNo:'000001',
					channelName:'システムエンジニア',
					channelNameSuffix:'になる',
					channelNameEn:'system-engineer',
					bgCnt:'350',
					exCnt:'20'
				},
				{
					channelNo:'000002',
					channelName:'経営コンサルタント',
					channelNameSuffix:'になる',
					channelNameEn:'management-consultation',
					bgCnt:'350',
					exCnt:'20'
				},
				{
					channelNo:'000003',
					channelName:'美容師',
					channelNameSuffix:'になる',
					channelNameEn:'beautician',
					bgCnt:'350',
					exCnt:'20'
				},
				{
					channelNo:'000004',
					channelName:'絵本作家',
					channelNameSuffix:'になる',
					channelNameEn:'picture-book-writer',
					bgCnt:'350',
					exCnt:'20'
				}
				]
			},
			{
				key:'sports',
				channelName:'スポーツ',
				channelNameEn:'Sports',
				bgCnt:'2,500',
				exCnt:'100',
				channelDetailList:[
				{
					channelNo:'000001',
					channelName:'サッカー',
					channelNameSuffix:'をはじめる',
					channelNameEn:'soccer',
					bgCnt:'1,350',
					exCnt:'20'
				},
				{
					channelNo:'000002',
					channelName:'ボルダリング',
					channelNameSuffix:'をはじめる',
					channelNameEn:'bouldering',
					bgCnt:'1,150',
					exCnt:'80'
				},
				{
					channelNo:'000003',
					channelName:'卓球',
					channelNameSuffix:'をはじめる',
					channelNameEn:'table-tennis',
					bgCnt:'1,150',
					exCnt:'80'
				},
				]
			},
		];
		
		this.joinChannel = function(channelCd) {
			if ($('input[name="channel_' + channelCd + '"]:checked').attr('checked')) {
				$('input[name="channel_' + channelCd + '"]:checked').attr('checked', false);
				$('#jc_' + channelCd).addClass('ion-plus-round');
				$('#jc_' + channelCd).removeClass('ion-checkmark-round');
			} else {
				$('input[name="channel_' + channelCd + '"]:checked').attr('checked', true);
				$('#jc_' + channelCd).removeClass('ion-plus-round');
				$('#jc_' + channelCd).addClass('ion-checkmark-round');
			}
		};
		
		this.pushChannelDetail = function() {
			channelNavi.bringPageTop(viewChannel + 'channel_detail.html', {animation: 'slide'})
		};
	});

})();