/* (c) 2017 Messagewall inc. */
/**
 * SettingEmail画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("SettingEmailCtrl", function() {
		this.modifyEmailLabel = 'ryo-imayoshi@messagewall.net';
		this.modifyEmail = function(id) {
			createDialog(messageMap.get('SETTING_MODIFY_COMPLETE'), true);
			$(document).one('posthide', function(event) {
				indexNavi.popPage({animation: 'slide'});
			});
		};
		this.popSettingEmail = function() {
			indexNavi.popPage({animation: 'slide'});
		};
	});

})();