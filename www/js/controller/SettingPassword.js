/* (c) 2017 Messagewall inc. */
/**
 * SettingPassword画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("SettingPasswordCtrl", function() {
		this.modifyPassword = function(id) {
			createDialog(messageMap.get('SETTING_MODIFY_COMPLETE'), true);
			$(document).one('posthide', function(event) {
				indexNavi.popPage({animation: 'slide'});
			});
		};
		this.popSettingPassword = function() {
			indexNavi.popPage({animation: 'slide'});
		};
	});

})();