/* (c) 2017 Messagewall inc. */
/**
 * Setting画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("SettingCtrl", function() {
		this.pushSettingName = function() {
			indexNavi.bringPageTop(viewSetting + 'setting_name.html', {animation: 'slide'})
		};
		this.pushSettingEmail = function() {
			indexNavi.bringPageTop(viewSetting + 'setting_email.html', {animation: 'slide'})
		};
		this.pushSettingPassword = function() {
			indexNavi.bringPageTop(viewSetting + 'setting_password.html', {animation: 'slide'})
		};
		this.popSetting = function() {
			indexNavi.popPage({animation: 'lift'});
		};
	});

})();