/* (c) 2017 Messagewall inc. */
/**
 * ProfileMentor画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("ProfileMentorCtrl", [
		"ExperiencerData", function(ExperiencerData) {
		
		this.experiencerId = ExperiencerData.get();
		this.trust = function() {
			var currentCnt = document.getElementById("trustCnt").textContent;
			if (document.getElementById('trustIcon').className != 'ion-android-favorite') {
				document.getElementById("trustCnt").textContent = parseInt(currentCnt) + 1;
				document.getElementById('trustCnt').style.color ='#EE6557';
				document.getElementById('trustIcon').style.color ='#EE6557';
				document.getElementById('trustIcon').className ='ion-android-favorite';
				document.getElementById('trustText').style.color ='#4d4d4d';
			} else { 
				document.getElementById("trustCnt").textContent = parseInt(currentCnt) - 1;
				document.getElementById('trustCnt').style.color ='#999';
				document.getElementById('trustIcon').style.color ='#999';
				document.getElementById('trustIcon').className ='ion-android-favorite-outline';
				document.getElementById('trustText').style.color ='#ddd';
			}
		};
		
		this.pushChannelDetail = function() {
			wallNavi.bringPageTop(viewChannel + 'channel_detail.html', {animation: 'slide'});
		};
		this.popExProfile = function() {
			wallNavi.popPage({animation: 'lift'});
		};
	}]);
	
})();