/* (c) 2017 Messagewall inc. */
/**
 * ChannelDetail画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("ChannelDetailCtrl", function() {
		$(document).one('swiperight', '.channelDetailSwipe', function(event) {
			activeNavi().popPage({animation: 'slide'});
		});
		
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
	
		this.pushAchievement = function() {
			channelNavi.bringPageTop(viewSetting + 'achievement.html', {animation: 'lift'})
		};
		this.popChannelDetail = function() {
			activeNavi().popPage({animation: 'slide'})
		};
	});

})();