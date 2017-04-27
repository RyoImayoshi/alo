/* (c) 2017 Messagewall inc. */
/**
 * ProfileMe画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){

	module.controller("ProfileMeCtrl", function() {
		profileNavi = document.getElementById('mwProfileNavi');
		
		this.pushChannelWithTab = function() {
			tabbar = document.querySelector("ons-tabbar");
			tabbar.setActiveTab(2);
		};
		this.pushSetting = function() {
			profileNavi.bringPageTop(viewSetting + 'setting.html', {animation: 'lift'})
		};
		this.pushAchievement = function() {
			profileNavi.bringPageTop(viewProfile + 'achievement.html', {animation: 'lift'})
		};
	});

})();